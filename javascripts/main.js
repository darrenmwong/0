console.log('WOO');

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
     $('.parImage2 h4').slideUp('slow');
       /* 
       var down = document.getElementsByClassName('parImage2')
        console.log(down[0].innerHTML);
            down[0].innerHTML.css('opacity');
         });
        */
    });
    
$('.parImage2 h4').click(function() {
    console.log('down');
    "uses strict";
    $('.parImage2 h4').slideUp('slow');
    });
    

    
