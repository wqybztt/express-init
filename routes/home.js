var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.locals.title = 'hi home';
    res.render('home',res.locals);
});

module.exports = router;