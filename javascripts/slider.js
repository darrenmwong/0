var images = '.image-container',
    slide = $(images+' img').innerWidth(),
    speed = 300,
    opacity = '0.9';

function append(){$(images+' img').first().appendTo($(images));}

function prepend(){$(images+' img').last().prependTo($(images));}

$('.prev').click(function(){ prepend(); });
$('.next').click(function(){ append();  });


