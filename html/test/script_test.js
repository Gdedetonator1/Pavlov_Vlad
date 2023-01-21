$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    nav: true,
    loop: true,
    margin: 30,
    dotsEach: true,
    autowidth: true,
    navText: [
      '<img src="../project/img/Arrow_1.svg" alt="Arroleft">',
      '<img src="../project/img/Arrow 2.svg" alt="Arrowright">',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      630: {
        items: 2,
        nav: false,
      },
      1210: {
        items: 5,
      },
    },
  });
});
