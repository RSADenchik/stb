$(document).ready(function(){
    // Mobile navbar button

    var nav_icon = $('.nav-icon1');
    nav_icon.click(function(){
        $(this).toggleClass('open');

        // Overlay background if navbar menu open

        if($(this).hasClass('open')){
            $('<div class="visible-xs overlay">&nbsp;</div>').prependTo('body');
        }
            else {
            $('.overlay').remove();
        }
        return true;
    });

    //end mobile navbar menu

    // function scroll and touchmove height +100vh

    $.scrollify({
        section : "section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeInOutQuad",
        scrollSpeed: 1000,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: false,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
    // end function scroll height +100vh

    // function scroll on click arrow-down

    var home_arrow = $('#home-arrow');
    var video_arrow = $('#video-arrow');
    var photo_arrow = $('#photo-arrow');

    home_arrow.click(function() {
        $('html,body').animate({
                scrollTop: $("#videoCarousel").offset().top}, 'slow');
        return false;
    });

    video_arrow.click(function() {
        $('html,body').animate({
                scrollTop: $("#photoCarousel").offset().top}, 'slow');
        return false;
    });

    photo_arrow.click(function() {
        $('html,body').animate({
                scrollTop: $(".contact-screen").offset().top}, 'slow');
        return false;
    });
    // end function scroll on click arrow-down

    $('#videoCarousel, #photoCarousel').carousel({

    });
});