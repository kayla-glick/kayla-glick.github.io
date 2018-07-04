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

  fadeIn()

  $(window).scroll ->
    if $(this).scrollTop() == 0
      $('nav').removeClass('scroll')
    else
      $('nav').addClass('scroll')

    fadeIn()

fadeIn = () ->
  $('.fade-in').each (i, e) ->
    $e = $(e)
    
    if $(e).visible(true)
      $e.addClass('show')
