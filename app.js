//libraries
const express = require('express');
const app1 = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const cors = require('cors');
var passport = require('passport');
//const passportSetup = require('');

//settings
app1.use(cookieParser('secret'));
app1.use(flash());
app1.use(bodyParser.json({ limit: '50mb' }));
app1.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app1.use(cors());
app1.use(bodyParser.json());

app1.use(express.static('assets'));
app1.set('views', './views');
app1.set('view engine', 'jade');

//session management
app1.use(session({
    saveUninitialized: false,
    resave: true,
    secret: 'ssshhhhh',
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));
app1.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

app1.use(passport.initialize());
app1.use(passport.session());

//deifining routes
const indexRoute = require("./routes/index");

app1.use("/", indexRoute);

module.exports.app = app1;