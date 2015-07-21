  $(function() {
    function re(ins, sel) {
      eval(ins);
    }
    function image_gif(sel,duration, x, y, mod) {
      var nb = x * y;
      var delay = parseInt(duration / nb * 1000);
      var w = -parseInt($(sel).css('width'));
      var h = -parseInt($(sel).css('height'));
      var pw = w / x;
      var ph = h / y;
//      alert(w+' '+h);
      var i, j;
      var ins = "$('"+sel+"').delay("+delay+")";
        $(sel).css('left', '0px').css('top', '0px');
        i = 0;
        while (i > h) {
          j = 0;
          while (j > w) {
            if (j == w - pw && i != h - ph)
              ins += '.animate({\'left\':\''+(j)+'px\'}, 1, function(){setTimeout(function() {$(\''+sel+'\').css(\'top\', \''+(i+ph)+'px\').css(\'left\', \'0px\');}, '+(delay)+');}).delay('+(delay)+')';
            else
              ins += '.animate({\'left\':\''+(j)+'px\'}, 1).delay('+(delay)+')';
            j += pw;
          }
          i += ph;
        }
        ins += '.animate({\'left\':\'0px\', \'top\': \'0px\'}, 1, eval(ins));';
        eval(ins);
/*    if (mod == 'reverse') {
        $(sel).css('left', '-150px').css('top', '-150px');
        i = -150;
        while (i <= 0) {
          j = -150;
          while (j <= 0) {
            if (j == 0)
              ins += '.animate({\'left\':\''+(j)+'px\'}, 1, function(){setTimeout(function() {$(\''+sel+'\').css(\'top\', \''+(i-ph)+'px\').css(\'left\', \'-150px\');}, '+(delay)+');}).delay('+(delay)+')';
            else
              ins += '.animate({\'left\':\''+(j)+'px\'}, 1).delay('+(delay)+')';
            j -= pw;
          }
          i -= ph;
        }
        eval(ins);
    }*/
    }
//    explosion();
    image_gif('.explosion img', 16, 4, 4, 'infinite');
  });