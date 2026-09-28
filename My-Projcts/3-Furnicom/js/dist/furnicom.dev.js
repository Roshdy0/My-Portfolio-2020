"use strict";

// Start Landing Page
var landingSlide = $('.landing .owl-carousel');
landingSlide.owlCarousel({
  nav: true,
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  }
}); // End Landing Page
// Start Section Deals Days

var dealsSlider = $('.deals-day .slider .owl');
dealsSlider.owlCarousel({
  nav: false,
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  }
}); // End Section Deals Days
// Start Featured Products

var FPSlider = $('.featured-products .owl');
FPSlider.owlCarousel({
  nav: false,
  dots: false,
  loop: true,
  autoplay: true,
  margin: 10,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
}); // End Featured Products
// Start Customer Opinion

var dealsSlider = $('.customer .owl');
dealsSlider.owlCarousel({
  nav: false,
  loop: true,
  center: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    }
  }
}); // End Customer Opinion
// Start BLog

var dealsSlider = $('.blog .owl');
dealsSlider.owlCarousel({
  nav: false,
  loop: true,
  // center:true,
  margin: 10,
  // autoplay:true,
  // autoplayTimeout:4000,
  // autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1
    },
    900: {
      items: 2
    }
  }
}); // End Blog