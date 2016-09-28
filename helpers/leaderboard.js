/* The purpose of this function is to
 rearange all the data from the database
 into a package that is friendly and
 usefull for the front end*/


module.exports = {
  Main: function (games) {
    var players = [],
        gameData = [],
        shipPop = [],
        playersSorted = [],
        gameDataSorted =[],
        shipPopSorted = [];

    //Retrive the data from each game in the database
    games.forEach(function(game){
      /*for each player we need to see if
       an spot has already been reserved in the player array*/
      var found = false;
      var pos;
      //start with player 1 for this game
      var name = game.Player1.name
      players.forEach(function(e, i){
        if(name == e.name)
        {
          found = true;
          pos = i;
        }
      });
      //update arrays accordingly
      if(found)
      {
        players[pos].pointTotal += game.Player1.points;
        gameData[pos].latestGame = game.Player1.ships;
        gameData[pos].history.push({
          against: game.Player2.name,
          pointsGained: game.Player1.points,
          pointDif: (game.Player1.points - game.Player2.points)
        })
      }
      else
      {
        players.push({
          name: name,
          pointTotal: game.Player1.points
        });
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
        if(name == e.name)
        {
          found = true;
          pos = i;
        }
      });
      //update arrays accordingly
      if(found)
      {
        players[pos].pointTotal += game.Player2.points;
        gameData[pos].latestGame = game.Player2.ships;
        gameData[pos].history.push({
          against: game.Player1.name,
          pointsGained: game.Player2.points,
          pointDif: (game.Player2.points - game.Player1.points)
        })
      }
      else
      {
        players.push({
          name: name,
          pointTotal: game.Player2.points
        });
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


    //Sorting Data by highest points
    while(players.length > 0)
    {
      var tempScore = 0,
          tempPos = 0;

      players.forEach(function(e, i){
        if(e.pointTotal >= tempScore)
        {
          tempScore = e.pointTotal;
          tempPos = i;
        }
      });
      playersSorted.push(players[tempPos]);
      players.splice(tempPos,1);
      gameDataSorted.push(gameData[tempPos]);
      gameData.splice(tempPos,1);
    }

    //Ship Popularity Array Creation

    games.forEach(function(game){

      game.Player1.ships.forEach(function(ship){

        var elementPos = shipPop.map(function(tempShip) {return tempShip.name; }).indexOf(ship);
        console.log(elementPos);
        if(elementPos >= 0)
        {
          shipPop[elementPos].pop += 1;
        }
        else
        {
          shipPop.push({name: ship, pop: 1 });
        }
      });

      game.Player2.ships.forEach(function(ship){

        var elementPos = shipPop.map(function(tempShip) {return tempShip.name; }).indexOf(ship);
        console.log(elementPos);
        if(elementPos >= 0)
        {
          shipPop[elementPos].pop += 1;
        }
        else
        {
          shipPop.push({name: ship, pop: 1 });
        }
      });

    });

    //Sorting ship by highest popularity
    while(shipPop.length > 0)
    {
      var tempScore = 0,
          tempPos = 0;

      shipPop.forEach(function(e, i){
        if(e.pop >= tempScore)
        {
          tempScore = e.pop;
          tempPos = i;
        }
      });
      shipPopSorted.push(shipPop[tempPos]);
      shipPop.splice(tempPos,1);

    }


    console.log({players: playersSorted, gameData: gameDataSorted, shipPop: shipPopSorted, length: playersSorted.length});
    return {players: playersSorted, gameData: gameDataSorted, shipPop: shipPopSorted, length: playersSorted.length};
  }
};
