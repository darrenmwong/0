/* Parallax and Images */
$('.seatProject').hover(function() {
    "use strict";
    $('#seatImage').css('opacity', '.6');
}, function() {
    "use strict";
    $('#seatImage').css('opacity', '').css('max-width', '');
     });

$('.comparisonProject').hover(function() {
    "use strict";
    $('#comparisonImage').css('opacity', '.6');
}, function() {
    "use strict";
    $('#comparisonImage').css('opacity', '');
    });

$('.pawProject').hover(function() {
    "uses strict";
    $('#pawImage').css('opacity', '.6');
}, function() {
    "use strict";
    $('#pawImage').css('opacity', '');
    });

$('.parImage1 h4').hover(function() {
    console.log('hi');
    "uses strict";
    $('.parImage1 h4').slideUp('slow'); 
    console.log($('.parImage2 h4'));
     $('.parImage2 h4').slideUp('slow').done
     $('.parallaxContainer').css('z-index', '-1000');
     $('.pawProject').fadeIn('slow');
     $('.comparisonProject').fadeIn('slow');
     $('.seatProject').fadeIn('slow');    
     
    });
    
/* Navigation */    
$('.nav h1').hover(function () {
  "use strict";
  $('.line, .box').css('opacity', '1');
  $('.line').slideDown('slow');
  $('.box').slideDown('slow');
    });

$('.navClose').hover(function() {
    "use strict";
    console.log('touched');
    $('.line, .box').slideUp('slow');
    });

/* SCROLL FUNCTION */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
