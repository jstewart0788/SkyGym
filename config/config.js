
/**
 * Module dependencies.
 */
var express = require('express'),
    session  = require('express-session'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    flash    = require('connect-flash'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    errorHandler = require('errorhandler'),
    http = require('http'),
    path = require('path');

module.exports = function() {
  var app = express();

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('../views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  app.use(favicon("public/images/planet.png"));
  app.use(logger('dev'));
  app.use(bodyParser());
  app.use(cookieParser()); // read cookies (needed for auth)
  app.use(bodyParser.urlencoded({
	   extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(session({
  	secret: 'Empire4Lyfe',
  	resave: true,
  	saveUninitialized: true
  } )); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session
  app.use(errorHandler());

  return app;
}();
