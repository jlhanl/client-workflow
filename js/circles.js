//Set Circle IDs
var circleElements = document.querySelectorAll('.circle');

//console.log(circleElements);

//var setCircleIds = function(circleElements) {  
  //for (var i = 0; i < circleElements.length; i++) {
    //circleElements[i].id = 'circle' + i;
  //}
  //return setCircleIds;
//}

//console.log(circleElements);


  


$(document).ready(function () {


  $('.circle').click(function(){    
    var id = event.target.id;
    console.log(id);
    $('#' + id).css('fill', '3FB0AC'); 
  });

});


