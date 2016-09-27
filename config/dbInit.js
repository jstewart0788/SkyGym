//Require models needed to set up DB

var Ship = require('../models/ship'),
    mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/passport_local_mongoose');
/*Update DB with ship list*/


//Tie Fighter
var tieFighter = new Ship({
  Name: "Tie Fighter",
  Faction: "Empire",
  Pilots: [
    {name: "Academy Pilot" ,points: 12 ,ability: null },
    {name: "Obsidian Squad Pilot" ,points: 13 ,ability: null },
    {name: "Chaser" ,points: 14 ,ability: 'When another friendly ship at Range 1 spends a focus token, assign a focus token to your ship.' },
    {name: "Wampa" ,points:14 ,ability: 'When attacking, you may cancel all dice results. If you cancel a  result, deal 1 facedown Damage card to the defender.' },
    {name: "Black Squadron Pilot" ,points: 14 ,ability: null },
    {name: "Night Beast" ,points: 15 ,ability: 'After executing a green manoeuvre, you may perform a free focus action.' },
    {name: "Winged Gundark" ,points: 15 ,ability: 'When attacking at Range 1, you may change 1 of your hit results to a crit result.' },
    {name: "Youngster" ,points: 15 ,ability: "Friendly TIE fighters at Range 1-3 may perform the action on your equipped Upgrade card." },
    {name: "Backstabber" ,points: 16 ,ability: "When attacking from outside the defender's firing arc, roll 1 additional attack die." },
    {name: "Dark Curse",points: 16 ,ability: "When defending, ships attacking you cannot spend focus tokens or reroll attack dice." },
    {name: "Mauler Mithel" ,points: 17 ,ability: "When attacking at Range 1, roll 1 additional attack die." },
    {name: "Scourge" ,points: 17 ,ability: "When attacking a defender that has 1 or more Damage cards, roll 1 additional attack die." },
    {name: "Howlrunner" ,points: 18,ability: "When another friendly ship at Range 1 is attacking with its primary weapon, it may reroll 1 attack die." },
  ],
  Picture: "/images/shipsDB/tie_big.png"
});


tieFighter.save(function(err) {
    if (err) {
        return err;
      }
});
