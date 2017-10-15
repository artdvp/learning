var main = function(){
    
    $(document).keypress(function(event){
        if(event.which === 111){
            $('.current').children('.description').toggle();
            }
        else if(event.which === 110){
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();
            currentArticle.removeClass('current');
            nextArticle.addClass('current');
            }
        });
    
    $('.article').click(function(){
        $('.article').removeClass('current');
        $('.description').hide();
        $(this).addClass('current');
        $(this).children('.description').show();
    });    
};
    
    $(document).ready(main);