const { parentPort } = require('worker_threads');
const { findCompatibleUsers } = require('./numerology');
const { User } = require('./user');

parentPort.on('message', ({ mainUser, users }) => {
    try {
        const result = findCompatibleUsers(mainUser, users);
        parentPort.postMessage({ success: true, result });
    } catch (error) {
        parentPort.postMessage({ success: false, error: error.message });
    }
}); 