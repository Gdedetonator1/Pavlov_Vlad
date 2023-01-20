$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    autowidth: true,
    margin: 30,
    responsiveClass: true,
    dotsEach: true,
    navText: [
      '<img src="../project/img/Arrow_1.svg" alt="Arroleft">',
      '<img src="../project/img/Arrow 2.svg" alt="Arrowright">',
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      770: {
        items: 2,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  });
});
