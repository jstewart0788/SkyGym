/**
 * Passport Configuration
 */
 
var passport = require('passport'),
    Account = require('../models/account'),
    LocalStrategy = require('passport-local').Strategy;

 module.exports = function() {
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());

  return passport
}();
