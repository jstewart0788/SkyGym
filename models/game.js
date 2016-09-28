var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var Game = new Schema({
  Player1:{
    name: String,
    ships: [String],
    points: Number
  },
  Player2:{
    name: String,
    ships: [String],
    points: Number
  }
});

module.exports = mongoose.model('Game', Game);
