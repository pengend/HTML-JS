  $(function() {
    $('.menublock').hover(function() {
      $(this).find('.menucontent').css('display', 'block');
        }, function() {
      $(this).find('.menucontent').css('display', 'none');
        });
    $('.menucontent').hover(function() {
      $(this).css('display', 'block');
    }, function() {
      $(this).css('display', 'none');
    });
  });