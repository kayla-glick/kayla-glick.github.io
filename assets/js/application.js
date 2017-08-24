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

  $(document).on('click', '.collapse-btn', function() {
    if ($(this).attr('aria-expanded') == 'false') {
      $(this).addClass('glyphicon-chevron-right')
      $(this).removeClass('glyphicon-chevron-down')
    } else {
      $(this).removeClass('glyphicon-chevron-right')
      $(this).addClass('glyphicon-chevron-down')
    }
  });
});
