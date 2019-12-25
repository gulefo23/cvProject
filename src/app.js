const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bcrypt = require('bcrypt-nodejs');
const dotenv = require("dotenv").config();
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

// initializations
const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret: 'iaushd83236y)(&$)9283742%"·"&',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

// routes
this.json
app.use(require('./routes'));

// public
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});