$(function(){

    $('.diver-up').click(function(){      
        $('html, body').animate({
          scrollTop:0},500);
    });

    $('.diver').hover(
        function() {
            $('.diver-up').removeClass('hide');
            $(this).addClass('hide');
        }, function() {
            $('.diver-up').addClass('hide');
            $(this).removeClass('hide');
    });

    $('.title').click(function(){      
        $('html, body').animate({
          scrollTop:0},500);
    });

    $('.about-title').click(function(){      
        $('html, body').animate({
          scrollTop:0},500);
    });

    $('.icon-btn').hover(
        function(){
        $(this).css({'opacity' : 1.0});
    },function(){
        $(this).css({'opacity' : 0.8});
    });

    $('.icon-btn').click(function(){
        $('#signup-modal').fadeIn();
    });
    $('#close-modal').click(function(){
        $('#signup-modal').fadeOut();
    });

    $(function(){
        $(window).scroll(function (){
            $('.image').each(function(){
                var targetElement = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > targetElement - windowHeight + 200){
                    $(this).css('opacity','1');
                    $(this).css('transform','translateY(0)');
                }
            });
        });
    });

    $('.header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({'scrollTop': position},500);
    });

    function toggleChangeBtn(){
        var slideIndex = $('.slide').index($('.active'));
        $('.change-btn').show();
        if (slideIndex == 0) {
          $('.prev-btn').hide();
        } else if (slideIndex == $('.slide').length-1) {
          $('.next-btn').hide();
        }
    }


    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');
        toggleChangeBtn();
    });

    $('.change-btn').click(function() {
        var $displaySlide=$('.active');
        $displaySlide.removeClass('active');

        if($(this).hasClass('next-btn')){
          $displaySlide.next().addClass('active');
        }else{
          $displaySlide.prev().addClass('active');
        }
        toggleChangeBtn()
    });


    $('.burger-btn').hover(
        function(){
        $(this).css({'opacity' : 1.0});
    },function(){
        $(this).css({'opacity' : 0.8});
    });

    $('.burger-btn').click(function(){
        $('#sign-burger').fadeIn();
    });
    $('#close-burger').click(function(){
        $('#sign-burger').fadeOut();
    });

});