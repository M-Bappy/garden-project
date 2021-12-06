$(document).ready(function() {
    "use strict";
    $('.banner-wrapper').slick({
        nextArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' </i></button>",
        prevArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right'></i></button>",
        dots: true,




    });

    $('.banner-wrapper .slick-arrow').mouseover(function() {
        $(this).css("border-color", "#87cf01");
    })

    $('.banner-wrapper .slick-arrow').mouseleave(function() {
        $(this).css("border-color", "white");
    })

    $('.service-items').slick({
        arrows: false,
    })

    // counter start here

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    // latest project here

    $('.latest-project-item').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '90px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });


    // testimonial project here
    $('.testimonial-item-wrapper').slick({
        arrows: false,
        autoPlay: true,
        dots: true,
    })
});