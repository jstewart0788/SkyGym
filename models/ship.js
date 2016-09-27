var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Ship = new Schema({
    Name: String,
    Faction: String,
    Pilots: [{
      name: String,
      points: Number,
      ability: String
    }],
    Picture: String
});

module.exports = mongoose.model('Ship', Ship);
