const { findCompatibleUsers } = require('./numerology');
const { User } = require('./user');

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


test('empty users', () => {
    const users = [];
    expect(findCompatibleUsers(user0, users)).toEqual([]);
})

test('same user', () => {
    const users = [user0];
    expect(findCompatibleUsers(user0, users)).toEqual([]);
})


test('some compatible users 1', () => {
    const users = [user6, user5, user4, user3];
    expect(findCompatibleUsers(user0, users)).toEqual([5, 4]);
})

test('some compatible users 2', () => {
    const users = [user11, user10, user9, user8, user7];
    expect(findCompatibleUsers(user0, users)).toEqual([11, 7]);
})

test('all users compatible', () => {
    const users = [user5, user4, user1];
    expect(findCompatibleUsers(user0, users)).toEqual([5, 4, 1]);
})

test('all users incompatible', () => {
    const users = [user8, user9, user10];
    expect(findCompatibleUsers(user0, users)).toEqual([]);
})

test('correct sorting', () => {
const users = [user3, user4, user5, user6];
expect(findCompatibleUsers(user0, users)).toEqual([5, 4]);
})

test('premium user', () => {
    const users = [user11, user10, user9, user8, user7, user6, user5, user4, user3, user2, user1];
    expect(findCompatibleUsers(user0, users)).toEqual([11, 7, 5, 4, 1]);
})

test('not premium user', () => {
    const users = [user11, user10, user9, user8, user7, user6, user5, user4, user3, user2, user0];
    expect(findCompatibleUsers(user1, users)).toEqual([11, 7, 5]);
})

test('NotPremiumUserLessThan3Matches', () => {
    const users = [user6, user5, user4, user3, user2];
    expect(findCompatibleUsers(user1, users)).toEqual([5, 4]);
})
