---
---

$ ->
  $(document).on('mouseover', 'footer #socialLinks a', ->
    $('footer #socialLinks a').not(this).addClass('faded')
  ).on('mouseout', 'footer #socialLinks a', ->
    $('footer #socialLinks a').not(this).removeClass('faded')
  )
