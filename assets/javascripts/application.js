---
---

$(document).ready(function() {
  if ($(window).scrollTop() > 0) {
    $('nav').addClass('scroll'); 
  }

  $('html').addClass('ready');

  $('.nav-link, .scroll-to').click(function(e) {
    e.preventDefault();

    if ($(this).hasClass('nav-link')) {
      $('.nav-link.active').removeClass('active');
      $(this).addClass('active');
    }

    var ref = $(this).attr('href');
    var top = ref == "#greeting" ? $(ref).offset().top : $(ref).offset().top + 1;

    $('html, body').animate({ scrollTop: top }, 'slow');
  });

  fadeIn();

  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
      $('nav').removeClass('scroll');
      $('.navbar-brand').blur();
    } else {
      $('nav').addClass('scroll');
    }

    fadeIn()
  });

  $(document).on('click', '.btn', function() {
    $(this).blur();
  });

  $(document).on('click', '#headerNav .nav-link', function() {
    $('.navbar-toggler:visible').trigger('click')
  });

  $(document).on('click', '.navbar-toggler', function() {
    $collapse = $($(this).data('target'));
    $content  = $('main#content');

    if ($collapse.hasClass('show')) {
      $('html, body').css('overflow-y', '')
      $(this).addClass('collapsed')
      $collapse.removeClass('show');
      $content.removeClass('blur');
    } else {
      $('html, body').css('overflow-y', 'hidden')
      $(this).removeClass('collapsed');
      $collapse.addClass('show');
      $content.addClass('blur');
    }
  });

  $(document).on('click', '.btn-employer:not(.active)', function() {
    $('.btn-employer.active').removeClass('active');
    $(this).addClass('active');
    $('#employerCarousel').carousel($(this).data('index'));
  });
});

function fadeIn() {
  var index = 0;
  $('.fade-in:not(.fade-in-sub)').each(function(i, e) {
    var $e = $(e);

    if ($e.visible(true)) {
      setTimeout(function() {
        $e.addClass('show');

        var subIndex = 0;
        $e.find('.fade-in-sub').each(function(i, c) {
          setTimeout(function() {
            $(c).addClass('show');
          }, 50 * subIndex);
          subIndex += 1;
        });
      }, 100 * index);
      index +=1;
    }
  })
}
