  $(function() {
    $('.prev').click(function() {
        $('.slider').css('animation', 'none');
        $('.slider').animate({'left': '+=640'}, {duration: 200, modele: 'linear'});
        $('.slider').css('animation', 'diaporama 32s infinite');
      });
    $('.next').click(function() {
      $('.slider').css('animation', 'none');
      $('.slider').animate({'left': '-=640'}, {duration: 200, modele: 'linear'});
      $('.slider').css('animation', 'diaporama 32s infinite');
      });
  });