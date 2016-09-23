var Account = require('./models/account');

module.exports = function (app, passport) {

  app.get('/', function (req, res) {
      res.render('homepage');
  });

  app.get('/admin', function (req, res) {
      res.render('admin', { user : req.user });
  });

  app.get('/register', function(req, res) {
      res.render('register', { });
  });

  app.post('/register', function(req, res) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
            return res.render('register', { account : account });
        }

        passport.authenticate('local')(req, res, function () {
          res.redirect('/admin');
        });
    });
  });

  app.get('/login', function(req, res) {
      res.render('login', { user : req.user });
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/admin');
  });

  app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

};
