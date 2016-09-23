
/**
 * Module dependencies.
 */
var app = require('./config/config'),
    passport = require('./config/passport'),
    mongoose = require('mongoose');
var PORT = app.get('port');

// mongoose
mongoose.connect('mongodb://localhost/passport_local_mongoose');

// routes
require('./routes')(app);

app.listen(PORT, function() {
  console.log('Express server listening on port ' + PORT);
});
