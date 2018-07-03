---
---

$ ->
  $(document).on('mouseover', 'footer #socialLinks a', ->
    $('footer #socialLinks a').not(this).addClass('faded')
  ).on('mouseout', 'footer #socialLinks a', ->
    $('footer #socialLinks a').not(this).removeClass('faded')
  )

  if $(window).scrollTop() > 0
    $('nav').addClass('scroll')

  $(window).scroll ->
    if $(this).scrollTop() == 0
      $('nav').removeClass('scroll')
    else
      $('nav').addClass('scroll')
