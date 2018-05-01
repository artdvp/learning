var main = function(){
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();
        });
    $('.arrow-next').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if(nextSlide.length == 0){
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
            }
       
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
    });
    
    $('.arrow-prev').click(function(){
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.prev();
        
        if(nextSlide.length == 0){
            nextSlide = $('.slide').last();
            nextDot = $('.dot').last();
            }
       
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        
        
    });
    
    
    };
    
    
    $(document).ready(main);


    //$(":contains(text)");
    //$(":not(slector)");