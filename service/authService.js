const User = require('../models/user');
const bcrypt = require('bcrypt');
const ClientError = require('../customErrors/clientError');
const authServiceUtils = require('./authServiceUtils');

function getTokenMaxAge() {
    return authServiceUtils.maxAge;
}
async function registerUserService(req, res) {
    if(!authServiceUtils.areAllFieldsFilled(req.body)) throw new ClientError("All fields are required", 400);
    const newUser = new User(req.body);
    await newUser.save();
    return newUser;
}

async function loginUserService(req, res) {
    const user = await authServiceUtils.checkIfEmailIsRegistered(req.body.email);
    await authServiceUtils.checkIfPasswordIsCorrect(req.body.password, user.password);
    return {user:user, token:authServiceUtils.returnJwtToken(user.id)};
}

module.exports = {
    registerUserService,
    loginUserService,
    getTokenMaxAge
};