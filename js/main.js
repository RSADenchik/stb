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

    // function scroll height +100vh

    (function() {
        var delay = false;

        $(document).on('touchmove mousewheel DOMMouseScroll', function(event) {
            event.preventDefault();
            if(delay) return;

            delay = true;
            setTimeout(function(){delay = false},200)

            var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

            var a= $('section');
            if(wd < 0) {
                for(var i = 0 ; i < a.length ; i++) {
                    var t = a[i].getClientRects()[0].top;
                    if(t >= 40) break;
                }
            }
            else {
                for(var i = a.length-1 ; i >= 0 ; i--) {
                    var t = a[i].getClientRects()[0].top;
                    if(t < -20) break;
                }
            }
            if(i >= 0 && i < a.length) {
                $('html,body').animate({
                    scrollTop: a[i].offsetTop
                });
            }
        });
    })();

    // $(document).on('touchstart', function (e) {
    //     e.preventDefault();
    //     var startX = e.originalEvent.changedTouches[0].pageX,
    //         startY = e.originalEvent.changedTouches[0].pageY;
    //     this.element.one('touchend', function (e) {
    //         if (!this.canScroll) {
    //             return;
    //         }
    //         var endX = e.originalEvent.changedTouches[0].pageX,
    //             endY = e.originalEvent.changedTouches[0].pageY,
    //             changeY = endY - startY;
    //         if (changeY > 50) {
    //             _this.prve();
    //         } else if (changeY < -50) {
    //             this.next();
    //         }
    //
    //     });
    //     e.preventDefault();
    // });

        // end function scroll height +100vh


    // function scroll on click arrow-down

    var home_arrow = $('#home-arrow');
    var video_arrow = $('#video-arrow');
    var photo_arrow = $('#photo-arrow');

    home_arrow.click(function() {

        $('html,body').animate({
                scrollTop: $("#videoCarousel").offset().top},
            'slow');
        return false;
    });

    video_arrow.click(function() {

        $('html,body').animate({
                scrollTop: $("#photoCarousel").offset().top},
            'slow');
        return false;
    });

    photo_arrow.click(function() {

        $('html,body').animate({
                scrollTop: $(".contact-screen").offset().top},
            'slow');
        return false;
    });

    // end function scroll on click arrow-down


});