
/**
 * Passport Configuration
 */
 module.exports = function() {
  var passport = require('passport'),
      Account = require('../models/account'),
      LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(Account.authenticate()));
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());

  return passport
}();
