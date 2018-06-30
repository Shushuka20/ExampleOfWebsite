$(document).ready(function() {
  $(".burger-menu").click(function () {
      $(this).toggleClass("menu-on");
      $('.mobileMenu').toggle();
      $('body').toggleClass("overflow")
  });


  $('.establish .slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }   
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }   
      }
    ]
  });

  $('.testimonials .slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '<a class="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.4 14.14"><defs><style>.cls-1{fill:#ffb900;}</style></defs><title>Arrow</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_11" data-name="Слой 11"><rect class="cls-1" y="6.62" width="17" height="1"/><polygon class="cls-1" points="11.33 14.14 10.62 13.44 16.98 7.07 10.62 0.71 11.33 0 18.4 7.07 11.33 14.14"/></g></g></svg></a>',
    prevArrow: '<a class="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.4 14.14"><defs><style>.cls-1{fill:#ffb900;}</style></defs><title>Arrow</title><g id="Слой_2" data-name="Слой 2"><g id="Слой_11" data-name="Слой 11"><rect class="cls-1" y="6.62" width="17" height="1"/><polygon class="cls-1" points="11.33 14.14 10.62 13.44 16.98 7.07 10.62 0.71 11.33 0 18.4 7.07 11.33 14.14"/></g></g></svg></a>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }   
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }   
      }
    ]
  });

  $('.showcase .slider_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider_nav'
  });

  $('.showcase .slider_nav').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider_main',
    focusOnSelect: true,
    nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
        }   
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }   
      }
    ]
  });    

});