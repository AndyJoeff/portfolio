$(document).ready(function(){
    $('.hero-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
    });
  });
  