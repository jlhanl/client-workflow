//Set Circle IDs

var circleElements = document.querySelectorAll('.circle');

//var svg = document.querySelector('.circle');

$(document).ready(function() {
  console.log("Let's roll!");

  $('.navbar-toggle').click(function() {
    $('.navbar-header').toggleClass('grey-navbar-header');
  });

  $('.dot').click(function() {
    $(this).attr('class', '');
    $(this).attr('class', 'circle-fill');
  });

  $('.circle-fill').click(function() {
    $(this).attr('class', '');
    $(this).attr('class', 'dot');
  });


  $("#checkAll").click(function () {
    $(".task-group").prop('checked', $(this).prop('checked'));
  });
    


  $('#myform').validate({ // initialize the plugin
    rules: {
      field1: {
        required: true,
      },

      checkboxes_: {
        required: true, 
        minlength: 1
      },
    }
  });


});