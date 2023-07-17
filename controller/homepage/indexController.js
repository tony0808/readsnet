function renderHomeIndexPage(req, res) {
    res.render('homepage/home', {title:'Home', username:'Tony'});
}

function logoutUser(req, res) {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
}

module.exports = {
    renderHomeIndexPage,
    logoutUser
};