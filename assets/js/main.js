$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".navbar-bg").addClass("sticky-top");
    } else {
        $(".navbar-bg").removeClass("sticky-top");
    }
});