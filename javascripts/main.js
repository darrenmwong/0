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
/* Opening Head */

$('#projectNav').click(function() {
    "uses strict";

     $('.parImage1 h4').delay(400).slideUp(300); 
     $('.parImage2 h4').delay(400).slideUp(300).done
     $('.pawProject').delay(1200).fadeIn('slow');
     $('.comparisonProject').delay(1200).fadeIn('slow');
     $('.seatProject').delay(1200).fadeIn('slow')
     parCon();
 });

var parCon = function() { 
    setTimeout(function() {
     $('.parallaxContainer').css('z-index', '-1000');
    },2500);
};
/* Navigation     
$('.nav h1').hover(function () {
  "use strict";
  $('.line, .box').css('opacity', '1');
  $('.line').slideDown('slow');
  $('.box').slideDown('slow');
    });

$('.navClose').hover(function() {
    "use strict";
    $('.line, .box').slideUp('slow');
    });
*/
/* Image Clicks */

$('#seatImage').click(function(e) {
    e.preventDefault();
    $('#seatImage').append('<div> WOAH </div>');


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
        }, 600);
        return false;
      }
    }
  });
});
