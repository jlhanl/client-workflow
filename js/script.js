/// Mobile Nav Cover

//var vHeight = $(window).height(),
  //  vWidth = $(window).width(),
    //mobilenav = $('.mobile-nav');

//mobilenav.css({"height":vHeight,"width":vWidth});

//Set Circle IDs

var circleElements = document.querySelectorAll('.circle');
console.log(circleElements);

$(document).ready(function() {
  console.log("Let's roll!");

  $('.navbar-toggle').click(function() {
    $('.navbar-header').toggleClass('grey-navbar-header');
  });

  $('.circle').click(function() {
    $('this').toggleClass('circle-fill');
  });


});