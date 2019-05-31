---
---

$ ->
  $('html').addClass('ready')

  if $(window).scrollTop() > 0
    $('nav').addClass('scroll')

  $('.nav-link, .scroll-to').click (e) ->
    e.preventDefault()
    ref = $(this).attr('href')
    $('html, body').animate({ scrollTop: $(ref).offset().top }, 'slow')

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
