/* GET home page */
module.exports.index = function(req, res){
    res.render('home', { title: 'Express' });
};

/* GET about page. */
module.exports.about = function(req, res){
    res.render('about', {title: 'About'});
};

/* GET contact page. */
module.exports.contact = function(req, res){
    res.render('contact', {title: 'Contact'});
};

/* GET projects page. */
module.exports.projects = function(req, res){
    res.render('projects', {title: 'Projects'});
};