$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.back-to-top').removeClass('hidden');
    } else {
      $('.back-to-top').addClass('hidden');
    }
  });

  $(document).on('click', '.back-to-top', function() {
    $(this).blur()
  });
});
