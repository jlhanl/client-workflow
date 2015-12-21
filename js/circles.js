//Set Circle IDs
var circleElements = document.querySelectorAll('.circle');

//console.log(circleElements);

//var setCircleIds = function(circleElements) {  
  //for (var i = 0; i < circleElements.length; i++) {
    //circleElements[i].id = 'circle' + i;
  //}
  //return setCircleIds;
//}

console.log(circleElements);


  


$(document).ready(function () {

  //document.getElementsByClassName("circle").className = "MyClass";

//jQuery//

  //$(".circle").each(function(i) {
    //  $(this).attr('id', "circle" + (i + 1));
  //});
  $('.circle').click(function(){    
    var id = event.target.id;
    $('#' + id).css('fill', 'E1704B');
    console.log(id);
    //console.log('id = ' + id); 
  });

  $(".circle").click(function () {
      $("this").css('fill', 'E1704B');
  });

});

var openEvent = document.getElementsByClassName('open-event')[0];

openEvent.addEventListener("click", function(event) {
   openEvent[0].style.fill = "red";
});

function circleClick(event) {
  var circle = event.target;
  circle.setAttribute("fill", "red");
};
