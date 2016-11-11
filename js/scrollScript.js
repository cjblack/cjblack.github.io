$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 50) {
      $('.navWrap').addClass('fixed');
  } else {
      $('.navWrap').removeClass('fixed');
  }
});
