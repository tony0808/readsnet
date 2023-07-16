const User = require('../models/user');
const ClientError = require('../customErrors/clientError');

async function registerUserService(req, res) {
    if(!areAllFieldsFilled(req.body)) throw new ClientError("All fields are required", 400);
    const newUser = new User(req.body);
    await newUser.save();
    return newUser;
}

function areAllFieldsFilled(fields) {
    console.log(fields);
    if(!('name' in fields) || !('email' in fields) || !('username' in fields) || !('password' in fields)) return false;
    return true;
}

module.exports = {
    registerUserService,
};