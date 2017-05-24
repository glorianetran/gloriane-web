/* GET home page */
module.exports.index = function(req, res) {
    res.render('index', {
        title: 'Home'
    });
};

/* GET about page. */
module.exports.about = function(req, res) {
    res.render('about', {
        title: 'About'
    });
};

/* GET projects page. */
module.exports.projects = function(req, res) {
    res.render('projects', {
        title: 'Projects'
    });
};
