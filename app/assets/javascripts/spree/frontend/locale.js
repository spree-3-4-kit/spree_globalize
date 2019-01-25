(function() {
  Spree.fetch_locales = function() {
    return $.ajax({
      url: Spree.pathFor("locales"),
      success: function(data) {
        return $('.lang-selector').append(data);
      }
    });
  };

  $(function() {
    return $('body').on('change', '#locale-select select', function() {
      return $(this).parents('form').submit();
    });
  });

}).call(this);
