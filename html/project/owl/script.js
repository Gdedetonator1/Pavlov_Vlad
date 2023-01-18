$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    autowidth: true,
    responsiveClass: true,
    dotsEach: true,
    navText: [
      '<img src="./img/Arrow_1.svg" alt="Arroleft">',
      '<img src="./img/Arrow 2.svg" alt="Arrowright">',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        loop: false,
      },
      1000: {
        items: 3,
      },
    },
  });
});