const ClientError = require('../customErrors/clientError');
const authService = require('../service/authService');

function renderRegisterPage(req, res) {
    res.render('auth/register', {title:'Register'});
}

function renderLoginPage(req, res) {
    res.render('auth/login', {title:'Login'});
}

function registerUser(req, res) {
    try {
        const newUser = authService.registerUserService(req, res);
        res.status(200).json({newUser});
    }
    catch(err) {
        if(err instanceof ClientError)  
            res.status(err.statusCode).json({err_msg:err.message});
        else 
            res.status(500).json({err_msg:'Server error while registering new user.'});
    }
}

async function loginUser(req, res) {
    try {
        const {user, token} = await authService.loginUserService(req, res);
        res.cookie('jwt', token, { httpOnly: true, maxAge: authService.getTokenMaxAge() * 1000 });
        res.status(200).json({user});
    }
    catch(err) {
        if(err instanceof ClientError)  
            res.status(err.statusCode).json({err_msg:err.message});
        else 
            res.status(500).json({err_msg:'Server error while logging in user.'});
    }
}

module.exports = {
    renderRegisterPage,
    renderLoginPage,
    registerUser,
    loginUser,
};

