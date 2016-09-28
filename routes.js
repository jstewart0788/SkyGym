var Account = require('./models/account');
var Ship = require('./models/ship');
var Game = require('./models/game');
var leaderboard = require('./helpers/leaderboard');

module.exports = function (app, passport) {

  app.get('/', function (req, res) {
    Game.find({ }, function (err, game) {
      if (err) return handleError(err);
      var results = leaderboard.Main(game);
      res.render('homepage', results);
    });
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

  app.get('/shipList', function(req, res){
      Ship.find({ }, function (err, ship) {
        if (err) return handleError(err);
        res.json(ship);
      })
  });

  app.post('/addGame', function(req, res){
    var gameDat = req.body;
    var player1Ships = [];
    var player2Ships = [];

    for(elem in gameDat){
      var temp = elem.split('-');
      if(temp[1] == 'Player1')
        player1Ships.push(gameDat[elem]);
      if(temp[1] == 'Player2')
        player2Ships.push(gameDat[elem]);
    }

    var currGame = new Game({
      Player1:{
        name: gameDat.Player1Name,
        ships: player1Ships,
        points: gameDat.Player1PointsEarned
      },
      Player2:{
        name: gameDat.Player2Name,
        ships: player2Ships,
        points: gameDat.Player2PointsEarned
      }
    });

    currGame.save(function(err) {
        if (err) {
            return err;
          }
    });


    res.redirect('/admin');
  });

};
