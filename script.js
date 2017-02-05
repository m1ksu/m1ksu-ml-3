$(function() {

    $(document).on('click','#w1', function(){
        $('html, body').animate({
            scrollTop: $(".wp1").offset().top,
        }, {duration: 600, easing: 'easeInOutSine'});
    });

    $(document).on('click','#w2', function(){
        $('html, body').animate({
            scrollTop: $(".wp2").offset().top,
        }, {duration: 600, easing: 'easeInOutSine'});
    });

    $(document).on('click','#w3', function(){
        $('html, body').animate({
            scrollTop: $(".wp3").offset().top,
        }, {duration: 600, easing: 'easeInOutSine'});
    });

    $(document).on('click','#w4', function(){
        $('html, body').animate({
            scrollTop: $(".wp4").offset().top,
        }, {duration: 600, easing: 'easeInOutSine'});
    });

    $(document).on('click','#w5', function(){
        $('html, body').animate({
            scrollTop: $(".wp5").offset().top,
        }, {duration: 600, easing: 'easeInOutSine'});
    });


    $(document).on('click', 'body', function(){
        $('navTable').animate({opacity: 1});
    });

    window.onscroll = function () {
        if ($(window).scrollTop() >= ($(".wp1").position().top - 100)) {
            $('.navTable').animate({opacity: 1});
        }
    }
});
