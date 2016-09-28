module.exports = {
  Main: function (games) {
    console.log(games);
    var players = [];
    var gameData = [];

    //Retrive the data from each game in the database
    games.forEach(function(game){
      /*for each player we need to see if
       an spot has already been reserved in the player array*/
      var found = false;
      var pos;
      //start with player 1 for this game
      var name = game.Player1.name
      players.forEach(function(e, i){
        if(name == e)
        {
          found = true;
          pos = i;
          console.log("Found" + e+ "@ pos " + i)
        }
      });
      //update arrays accordingly
      if(found)
      {
        gameData[pos].latestGame = game.Player1.ships;
        gameData[pos].history.push({
          against: game.Player2.name,
          pointsGained: game.Player1.points,
          pointDif: (game.Player1.points - game.Player2.points)
        })
      }
      else
      {
        players.push(name);
        gameData.push({
          latestGame: game.Player1.ships,
          history:[{
            against: game.Player2.name,
            pointsGained: game.Player1.points,
            pointDif: (game.Player1.points - game.Player2.points)
          }]
        });
      }

      //reset helper variables
      found = false;
      pos = null;
      //Do the same thing for player 2
      var name = game.Player2.name
      players.forEach(function(e, i){
        if(name == e)
        {
          found = true;
          pos = i;
          console.log("Found" + e+ "@ pos " + i)
        }
      });
      //update arrays accordingly
      if(found)
      {
        gameData[pos].latestGame = game.Player2.ships;
        gameData[pos].history.push({
          against: game.Player1.name,
          pointsGained: game.Player2.points,
          pointDif: (game.Player2.points - game.Player1.points)
        })
      }
      else
      {
        players.push(name);
        gameData.push({
          latestGame: game.Player2.ships,
          history:[{
            against: game.Player1.name,
            pointsGained: game.Player2.points,
            pointDif: (game.Player2.points - game.Player1.points)
          }]
        });
      }

    });

    console.log({players: players, gameData: gameData, length: players.length});

    return {players: players, gameData: gameData, length: players.length};
  }
};
