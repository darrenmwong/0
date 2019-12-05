export default function() {
    $('nav a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
}
