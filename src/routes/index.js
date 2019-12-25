const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/cv', (req, res) => {
    res.render('cv');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/login', (req, res) => {
    res.render('login');
    process.env.LOGIN=false;
});

router.post('/login', (req, res) => {
    console.log(process.env.LOGIN);
    if ( req.body.username == process.env.USER && req.body.password == process.env.PASSWORD ) {
        res.redirect('/admin');
        process.env.LOGIN=true;
        console.log(process.env.LOGIN);
    } else {
        req.flash('error', 'Incorrect password or username');
        console.log(process.env.LOGIN);
    }
    res.redirect('/login');
    console.log(process.env.LOGIN);

});

router.get('/admin', (req, res) => {
    if (process.env.LOGIN=true) {
        res.render('admin');
    } else if ( process.env.LOGIN=false ) {
        res.render('login');
    }
});

module.exports = router;