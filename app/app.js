/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){
  // this is where we jquery
  //var keyData = 'ourKey'; // going to need to make this dynamic?


  $('.btn-add').on('click', function(e){
    console.log(e);
    var keyData = $('.input-key').val();
    var valueData = $('.input-value').val();
    // write to db
    localStorage.setItem(keyData, valueData);
    // read from db
    var displayText = keyData + ' | ' + localStorage.getItem(keyData);
    // this only displays the last one? might want to switch to html
    // and append a div
    // <div class="display-data-item" data-keyValue="keyData">valueData</div>
    // if you use backticks ` you can use ${templateLiterals}
    // TODO make this vars make sense across the app
    $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
    $('.input-key').val('');
    $('.input-value').val('');
  });


  // update db
    // need to expand when  more than 1 item is added

  // delete item
  $('.container-data').on('click', '.display-data-item', function(e){
    console.log(e.currentTarget.dataset.keyvalue);
    var keyData = e.currentTarget.dataset.keyvalue;
    localStorage.removeItem(keyData);
    $('.container-data').text('');
  });
  // delete all?
  $('.btn-clear').click(function(){
    localStorage.clear();
    $('.container-data').text('');
  });


  //Functions for buttons in .btn-container
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  $('.btn-randomize').on('click', function(){
    var arrayOfPanels = [1, 2, 3, 4, 5];
    arrayOfPanels.forEach(function(i){
      var tempColor = getRandomColor();
      $('.color-panel' + i).css({'background-color': tempColor});
      $('.color-label' + i).text(tempColor);
    })
  })


  //Functions for color panels

  //.color-panel1
  $('.color-panel1').hover(function(){
    $('.color-label1').css("visibility", "visible");
    $('.btn1').css("visibility", "visible");
  }, function(){
    $('.color-label1').css("visibility", "hidden");
    $('.btn1').css("visibility", "hidden");
  })

  //.color-panel2
  $('.color-panel2').hover(function(){
    $('.color-label2').css("visibility", "visible");
    $('.btn2').css("visibility", "visible");
  }, function(){
    $('.color-label2').css("visibility", "hidden");
    $('.btn2').css("visibility", "hidden");
  })

  //.color-panel3
  $('.color-panel3').hover(function(){
    $('.color-label3').css("visibility", "visible");
    $('.btn3').css("visibility", "visible");
  }, function(){
    $('.color-label3').css("visibility", "hidden");
    $('.btn3').css("visibility", "hidden");
  })

  //.color-panel4
  $('.color-panel4').hover(function(){
    $('.color-label4').css("visibility", "visible");
    $('.btn4').css("visibility", "visible");
  }, function(){
    $('.color-label4').css("visibility", "hidden");
    $('.btn4').css("visibility", "hidden");
  })

  //.color-panel5
  $('.color-panel5').hover(function(){
    $('.color-label5').css("visibility", "visible");
    $('.btn5').css("visibility", "visible");
  }, function(){
    $('.color-label5').css("visibility", "hidden");
    $('.btn5').css("visibility", "hidden");
  })


  //Function for Show/Hide Labels button
  $('.btn-toggleLables').on('click', function(){
    var arrayOfLabels = [1, 2, 3, 4, 5];
    arrayOfLabels.forEach(function(i){
      $('.color-label' + i).css("visibility", "visible")
    }) 
    $('.btn-toggleLables').text("Hide Labels")
  })
});