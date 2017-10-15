$(document).ready(function() {


    $('<p>').text('List'); //the $() creates a new '<p>' element and .text() sets its text to 'List'
    $('li').text('Old item'); // the $() selects the 'li' elements and .text() replaces its text with 'Old item' 
    $('h1').text(); // the $() selects the 'h1' elements and .text() gets the text it contains


    //appendTo
    $('btn').click(function() {

        $('<li>').text('New item').appendTo('.item');
    });


    $('.btn').click(function() {
        $('<li>').text('New item').prependTo('.item');
    });


    $('.btn').click(function() {
        $('.select').remove();
    });














});

//



// try it out1
var main = function() {
  $("li").click(function() {
    $(this).addClass('read');
  });
};


$(document).ready(main);



//try it out 2
var main = function () {
  $(".btn").click(function () {
    $(".read").hide();
  });
};

  $('li').click(function() {
  $(this).addClass('read');
})


$(document).ready(main);

//try it out 3
var main = function () {
  $(".btn").click(function () {
    $(".description").toggle();
  });
};


$(document).ready(main);


var main = function() {
  $(".btn").click(function(event) {
    $(".container").hide();
    $('.container').slideDown(800);
  });
};

$(document).ready(main);