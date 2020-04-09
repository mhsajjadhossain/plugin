$(function () {

    $('.count-up').counterUp({
        time: 2000
    });

    $('.active-slide').slick({
        arrows: true,
        nextArrow: '.right-arrows-icon',
        prevArrow: '.left-arrows-icon',
        autoPlay: true,
        autoplaySpeed: 2000
    });

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    $(window).on('load', function(event) {
        $('.preloader').delay(2000).fadeOut(2000);
    });
    
    
    
    
    
    
     $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
    
    
    
    
    
    
    
    
//    mixitup js
    
    var mixer = mixitup('.work_wrap');
    
    
    
    
    
$('.slider_active').slick({
    arrows:false,
    dots:true
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
