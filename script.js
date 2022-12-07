document.querySelector('.burger').addEventListener('click', () => {
  document.querySelector('.burger').classList.toggle('changed');
  document.querySelector('.mobile-menu').classList.toggle('opened');
  document.querySelector('.logo').classList.toggle('changed');
});

$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 881,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
