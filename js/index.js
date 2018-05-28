$(function () {
    $('#nav li').hover(function () {
         $(this).children('dl').stop().slideDown(200);
    },function () {
         $(this).children('dl').stop().slideUp(200);
    })
});
$(function () {
    $("#bannerFir").banner("json/banner-data.json", 5000);
});