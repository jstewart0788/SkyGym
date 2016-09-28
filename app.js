
/**
 * Module dependencies.
 */
var app = require('./config/config'),
    passport = require('./config/passport'),
    mongoose = require('mongoose');
var PORT = app.get('port');

// mongoose
mongoose.connect('mongodb://heroku_5gd1rb0h:i81jp1a3dgscdge94fohufsjk6@ds041536.mlab.com:41536/heroku_5gd1rb0h');

// routes
require('./routes')(app, passport);

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
