$(document).ready(function () {

    var flag = true; // take a flag here

    $(".open-event").click(function () {
        flag = false; // reset flag
        $(".open-event").css('fill', '158844');
        $(".open-event").css('stroke', '158844');
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
