Spree.fetch_locales = ->
  $.ajax
    url: Spree.pathFor("locales"),
    success: (data) ->
      $('.lang-selector').append(data)

$ ->
  $('body').on 'change', '#locale-select select', ->
    $(this).parents('form').submit()
