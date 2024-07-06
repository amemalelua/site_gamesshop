window.alert("Bem vindo ao Site")
$(function() {
    var slideWidth = $('.slide').outerWidth();
    var slideCount = $('.slide').length;
    var slideWidth = slideWidth * slideCount;

    $('.slider').css('width', slideWidth);

    function slide(){
        $('.slider').animate({ left: -slideWidth}, 2000, function(){
            $('slider .slider:first-child').appendTo('.slider');
            $('.slider').css('left', '');
            slide();
        });
    }

    slide();
});