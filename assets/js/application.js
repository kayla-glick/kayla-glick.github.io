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

  $(document).on('click', '.post img', function() {
    $('#modal-place .modal-dialog').html($(this).clone().removeClass('glowing-link'));
    $('#modal-place').modal('show');
  });

  var per_page    = parseInt($('#per-page').val());
  var total_page  = Math.ceil($('.post-preview:not(li)').length / per_page);
  var page        = parseInt($('.page-number').data('page'));

  $(document).on('click', '.prev-category-page:not(.disabled)', function() {
    $(".post-preview:not(li)[data-page='"+page+"']").addClass('hidden');
    $(".post-preview:not(li)[data-page='"+(page-1)+"']").removeClass('hidden');

    $('.next-category-page.disabled').removeClass('disabled')

    if ( page-1 == 1) {
      $(this).addClass('disabled');
    } else {
      $(this).removeClass('disabled');
    }

    page--;

    $('.page-number').text("Page: "+page+" of "+total_page)
  });

  $(document).on('click', '.next-category-page:not(.disabled)', function() {
    $(".post-preview:not(li)[data-page='"+page+"']").addClass('hidden');
    $(".post-preview:not(li)[data-page='"+(page+1)+"']").removeClass('hidden');

    $('.prev-category-page.disabled').removeClass('disabled')

    if ( page+1 == total_page) {
      $(this).addClass('disabled')
    } else {
      $(this).removeClass('disabled')
    }

    page++;

    $('.page-number').text("Page: "+page+" of "+total_page)
  });
});
