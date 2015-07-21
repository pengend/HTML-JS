  $(function() {
    $('#affiche').click(function() {
      $('img').first().fadeIn('slow', function shownextone(){
        $(this).next('img').fadeIn('slow', shownextone);
      });
    });
    $('#cache').click(function() {
      $('img').first().fadeOut('slow', function hidenextone(){
        $(this).next('img').fadeOut('slow', 'swing', hidenextone);
      });
    });
    $('#opac').click(function() {
      $('img').first().fadeTo('slow', 0.5, function tonextone(){
        $(this).next('img').fadeTo('slow', 0.5, tonextone);
      });
    });
    $('#diapo').click(function(){
      $('img').first().slideDown();
    });
    $('#enchainer').click(function() {
      $('#animed').animate({'border-width': '100'}, 1500).animate({'width':'-=100'}, 1500);
    });
    $('#nePasEnchainer').click(function() {
      $('#animed').animate({'border-width': '100'}, {queue: false, duration: 1500})
      .animate({'width': '-=100'}, 1500);
    });
    $('#executerEnMemeTemps').click(function() {
      $('#animed').animate({ 'border-width': '100', 'width': '-=100' }, 1500);
    });
    $('#etatInitial').click(function(){
      $('#animed').animate({'border-width':'2', 'width': '+=100'}, 1500);
    });
    $('#droite').click(function() {
      $('#move').animate({'left':'+=50'}, 1000);
    });
    $('#gauche').click(function() {
      $('#move').animate({'left':'-=50'}, 1000);
    });
    $('#haut').click(function() {
      $('#move').animate({'top':'-=50'}, 1000);
    });
    $('#bas').click(function() {
      $('#move').animate({'top':'+=50'}, 1000);
    });
    $('#etatFile').click(function() {
      var n = $('#move').queue();
      $('#infos').text('Nombre d\'animations dans la file d\'attente : ' + n.length);
    }); 
    $('#tourner').click(function bis() {
      $('#move').animate({'left':'+=200'}).animate({'top':'+=200'}).animate({'left':'-=200'}).animate({'top':'-=200'}, bis);
    });
      $('#stopFin').click( function() {
      $('#move').stop(false, true);
    });  
    $('#stopAnnuleFin').click( function() {
      $('#move').stop(true, true);
    });  
    $('#stop').click( function() {
      $('#move').stop(true, false);
    });
    function horloge() {
    var laDate = new Date();
    var sec;
    if (laDate.getSeconds() < 10)
      sec = '0' + laDate.getSeconds();
    else
      sec = laDate.getSeconds();
    var h = laDate.getHours() + ":" + laDate.getMinutes() + ":" + sec;
    $('#heure').text(h);
    }
    setInterval(horloge, 1000);
    $('#montagnePetit').mouseover(function() {
      $(this).fadeOut(1000);
      $('#montagneGrand').fadeIn(1000);
    });
    $('#montagneGrand').mouseout(function() {
      $(this).fadeOut(1000);
      $('#montagnePetit').fadeIn(1000);
    });
    $('.miniature').click(function() {
      $('.miniature').css('border-width', '5px');
      $(this).css('border-width', '10px');
      var source = $(this).attr('src');
      $('#gr').fadeOut(2000, function(){
        $(this).attr('src', source);
      });
      $('#gr').fadeIn(2000);
    });
  });