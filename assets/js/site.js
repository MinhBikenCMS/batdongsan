$(document).ready(function() {
    $('.header .nav-icon').click(function() {
        $(this).toggleClass('open');
        $('.nav-mobile').toggleClass('open');
        $('.over-lay').toggleClass('open');
    });
    $('.nav-mobile .icon-cancel').click(function() {
        $('.nav-icon').removeClass('open');
        $('.nav-mobile').removeClass('open');
        $('.over-lay').removeClass('open');
    });
    $('.ic-arrow').click(function() {
        $(this).parent().toggleClass('open');
    });
    $('.type-radio').click(function() {
        $('.type-radio').removeClass('active');
        $(this).addClass('active');
    });

});