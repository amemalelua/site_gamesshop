$(function(){
    var slideWidth = $('.slide').outerWidth();
    var slideCount = $('.slide').length;
    var slideWidth = slideWidth * slideCount;

    $('.slide').css('width', slideWidth);

    function slide(){
        $('.slider').animate({left: -slideWidth}, 200, function(){
            $('slider .slider:first-child').appenTo('.slider');
            $('.slider').css('left', '');
            slide();
        });
    }

    slide();
});