---
---

$ ->
  $(document).on('mouseover', '.brand-link', ->
    $(this).parents('ul').find('.brand-link').not(this).addClass('faded')
  ).on('mouseout', '.brand-link', ->
    $(this).parents('ul').find('.brand-link').not(this).removeClass('faded')
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
