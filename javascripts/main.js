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
     $('.pawProject').fadeIn('slow');
     $('.comparisonProject').fadeIn('slow');
     $('.seatProject').fadeIn('slow');    
     
    });
    
    
$('.nav h1').hover(function () {
  "use strict";
  $('.line, .box').css('opacity', '1');
  $('.line').slideDown('slow');
  $('.box').slideDown('slow');
    });

    
