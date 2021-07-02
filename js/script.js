
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$(function(){
    $('.js-accordion').on('click',function(){
        $(this).toggleClass('-active');
        $(this).next().slideToggle();

    })
});

$(function(){
    new WOW().init();
});