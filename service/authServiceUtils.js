const ClientError = require('../customErrors/clientError');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

function returnJwtToken(id) {
    return jwt.sign({ id }, `${process.env.USER_SECRET}`, { expiresIn: maxAge });
}

function areAllFieldsFilled(fields) {
    if(!('name' in fields) || !('email' in fields) || !('username' in fields) || !('password' in fields)) return false;
    return true;
}

async function checkIfEmailIsRegistered(email) {
    const user = await User.findOne({ email: email });
    if (!user) throw new ClientError('The email provided is not registered.', 400);
    return user;
}

async function checkIfPasswordIsCorrect(passA, passB) {
    const auth = await bcrypt.compare(passA, passB);
    if (!auth) throw new ClientError('Wrong password.', 400);
}

module.exports = {
    checkIfEmailIsRegistered,
    checkIfPasswordIsCorrect,
    areAllFieldsFilled,
    returnJwtToken,
    maxAge
};