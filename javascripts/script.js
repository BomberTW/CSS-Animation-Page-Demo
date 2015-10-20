/// <reference path="../typings/jquery/jquery.d.ts"/>
$(function () {
    
    $(window).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 300) {
            // $('#monitor').addClass('animate');
            // $('#phone').addClass('animate');
            $('#monitor').addClass('animated fadeInLeft my-animate');
            $('#phone').addClass('animated fadeInLeft my-animate');
        }
        if (y > 400) {
            $('#support').find('span').addClass('animated fadeIn');
            $('#smart').find('span').addClass('animated fadeIn');
            $('#speed').find('span').addClass('animated fadeIn');
            $('#support').find('img').addClass('animate grow-img');
            $('#speed').find('img').addClass('animate grow-img');
            $('#smart').find('img').addClass('animate grow-img');
        }
        ;
    });
});


