const { Worker } = require('worker_threads');
const path = require('path');
const { User } = require('./user');

function runWithTimeout(mainUser, users, timeoutMs = 1000) {
    return new Promise((resolve, reject) => {
        const worker = new Worker(path.join(__dirname, 'worker.js'));
        const timeoutId = setTimeout(() => {
            worker.terminate();
            reject(new Error(`Test timed out after ${timeoutMs}ms - possible infinite loop detected`));
        }, timeoutMs);

        worker.on('message', (message) => {
            clearTimeout(timeoutId);
            if (message.success) {
                resolve(message.result);
            } else {
                reject(new Error(message.error));
            }
            worker.terminate();
        });

        worker.on('error', (err) => {
            clearTimeout(timeoutId);
            reject(err);
            worker.terminate();
        });

        worker.postMessage({ mainUser, users });
    });
}

const user0 = new User("01012000", "Jane Doe", true);
const user1 = new User("01012000", "John Doe");
const user2 = new User("01011990", "Jane Smith");
const user3 = new User("09011991", "Bob Johnson");
const user4 = new User("01012000", "Jane Smith");
const user5 = new User("03272003", "Alice Lee");
const user6 = new User("06251995", "Samuel Kim");
const user7 = new User("05291995", "Jane Smith");
const user8 = new User("07051992", "Bob Johnson");
const user9 = new User("10101999", "Alice Lee");
const user10 = new User("01282002", "Bill Jones");
const user11 = new User("12061997", "Paul Watson");

test('empty users', async () => {
    const users = [];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([]);
});

test('same user', async () => {
    const users = [user0];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([]);
});

test('some compatible users 1', async () => {
    const users = [user6, user5, user4, user3];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([5, 4]);
});

test('some compatible users 2', async () => {
    const users = [user11, user10, user9, user8, user7];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([11, 7]);
});

test('all users compatible', async () => {
    const users = [user5, user4, user1];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([5, 4, 1]);
});

test('all users incompatible', async () => {
    const users = [user8, user9, user10];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([]);
});

test('correct sorting', async () => {
    const users = [user3, user4, user5, user6];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([5, 4]);
});

test('premium user', async () => {
    const users = [user11, user10, user9, user8, user7, user6, user5, user4, user3, user2, user1];
    await expect(runWithTimeout(user0, users)).resolves.toEqual([11, 7, 5, 4, 1]);
});

test('not premium user', async () => {
    const users = [user11, user10, user9, user8, user7, user6, user5, user4, user3, user2, user0];
    await expect(runWithTimeout(user1, users)).resolves.toEqual([11, 7, 5]);
});

test('NotPremiumUserLessThan3Matches', async () => {
    const users = [user6, user5, user4, user3, user2];
    await expect(runWithTimeout(user1, users)).resolves.toEqual([5, 4]);
});
