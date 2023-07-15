
function renderRegisterPage(req, res) {
    res.render('auth/register', {title:'Register'});
}

function renderLoginPage(req, res) {
    res.render('auth/login', {title:'Login'});
}

module.exports = {
    renderRegisterPage,
    renderLoginPage
};

