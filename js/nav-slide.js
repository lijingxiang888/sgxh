$(function () {
    $('#nav li').hover(function () {
         $(this).children('dl').stop().slideDown(200);
    },function () {
         $(this).children('dl').stop().slideUp(200);
    })
});

