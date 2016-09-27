


$( document ).ready( function(){

  $.ajax({url: "/shipList"}).done(function(res){
    var shipNum = 1;

    $('#addShipPlayer1').on('click', function(){
      var shipDropdown = `
          <select name="Ship`+ shipNum + `">
            `;

      res[0].Pilots.forEach(function(elem){
        shipDropdown += "<option value='" +elem.name + "'>" + elem.name +"</option>  "
      });

      shipDropdown +='</select>';
      $("#player1Ships").append(shipDropdown);
      shipNum++;
    })


    $('#addShipPlayer2').on('click', function(){
      var shipDropdown = `
          <select name="Ship`+ shipNum + `">
            `;

      res[0].Pilots.forEach(function(elem){
        shipDropdown += "<option value='" +elem.name + "'>" + elem.name +"</option>  "
      });

      shipDropdown +='</select>';
      $("#player2Ships").append(shipDropdown);
      shipNum++;
    })

  });


} );
