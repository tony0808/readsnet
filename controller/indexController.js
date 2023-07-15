function renderIndexPage(req, res) {
    res.render('index', {title:'ReadsNet'});
}

module.exports = {renderIndexPage};