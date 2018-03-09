$(document).ready(function(){
    // Mobile navbar button
    var nav_icon = $('.nav-icon1');
    nav_icon.click(function(){
        $(this).toggleClass('open');

        // Overlay background if navbar menu open

        if($(this).hasClass('open')){
            $('<div class="d-md-none overlay">&nbsp;</div>').prependTo('body');
        }
            else {
            $('.overlay').remove();
        }
    });
    return true;
});