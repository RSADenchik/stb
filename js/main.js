$(document).ready(function(){
    var nav_icon = $('.nav-icon1');
    nav_icon.click(function(){
        $(this).toggleClass('open');

        if($(this).hasClass('open')){
            $('.main-screen').addClass('grad');
        }
            else {
            $('.main-screen').removeClass('grad');
        }

    });
    return true;
});