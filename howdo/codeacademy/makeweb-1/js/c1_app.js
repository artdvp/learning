var main = function() {

    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: "0px"
        }, 200);
        $('body').animate({
            left: "285px"

        }, 200);
    });
};

$('.icon-close').click(function() {
    $('.menu').animate({
        left: "-285px"
    });

    $('body').animate({
        left: "0px"
    });
});



$(document).ready(main);


/*
    
> - Greater than
< - Less than
>= Greater than or equal to
<= Less than or equal to
=== Equal to
!== Not equal to



var score1 = 23;
var score2 = 6;
var counter = 140;
var tweet = "Hiking trip on Saturday";

score1 > score2;
tweet.length <= counter;
score1 === score2;


    function

    ar percentage = function(num, denom) {
    var result = (num / denom) * 100;
    return result;
};


var p1 = percentage(23, 30);
     */


//click
var main2 = function() {

    $(".like-button").click(function(){
        $(this).toggleClass("active");
    });
};

$(document).ready(main2);


//keypress
$(document).keypress(function() {

	$('.dropdown-menu').toggle();

});


$(document).keypress(function(event){
	if(event.which === 109){
		$('.dropdown-menu').toggle();
	}
});



//
var main = function() {
  $(document).keypress(function(event) {
			
		
			if(event.which === 103){
				$(".btn").toggleClass("btn-like");		
			}


  });
};

$(document).ready(main);