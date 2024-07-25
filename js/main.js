/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
	
	  /**
   * Initiate glightbox
   */
	  const glightbox = GLightbox({
		selector: '.glightbox'
	  });

    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
	
	  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
	// AOS.init({
	  // duration: 1000,
	  // easing: 'ease-in-out',
	  // once: true,
	  // mirror: false
	// })
  // });
  
    /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  // });

  $(document).ready( function (e) {
    var cards = document.querySelectorAll(".service-card");
	var lists = document.querySelectorAll(".services-list li a");
    $("#services .services-list li").on('click', function(e) {
	var index = $(this).index();
	  if(lists[index].classList[1] === "active_cat") {
		  
	  }else {
	  $("#services .services-list li a").removeClass("active_cat");
      lists[index].classList.add("active_cat");
      $( ".showSlide" ).removeClass( "slideIn");
      $( ".showSlide" ).addClass( "slideOut");
      console.log(lists[index].classList[1] === "active_cat" , '-----------------')
      setTimeout(function() {
        if(index == 0) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 1) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 2) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 3) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }

        if(index == 4) {
          cards[index].classList.add("slideIn");
          $( ".service-card" ).removeClass( "showSlide");
          cards[index].classList.add("showSlide");
        }
    }, 300);
	  }
 
      
     
    })


  });

})(jQuery);