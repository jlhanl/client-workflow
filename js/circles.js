$(document).ready(function(){
  $('#client2').svg();
  var svg = $('#client2').svg('get'); 
  var myCircle = svg.circle(25, 25, 20, {fill: '#f8f8f8', stroke: 'rgb(74, 74, 74)', strokeWidth: 2});

});