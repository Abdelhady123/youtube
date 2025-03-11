$(document).ready(function(){

    $('.first-list-element').addClass("active");
$(".nav-item").click(function(){
$(".nav-item").removeClass("active");
$(this).addClass("active");
});

$("#toggler").click(function(event){
$(".wrap").toggleClass('toggled');

var right = $('.sidepar').css("right");
if(right == '0rem'){
    $('.sidepar').css({'right':'-19rem'});
    $('.layer').fadeOut();
}
else{
    $('.sidepar').css({'right':'0'});
    $('.layer').fadeIn();
}
});
$('.layer').click(function(){
    $('.sidepar').css({'right':'-19rem'});
    $('.layer').fadeOut();

})
$('.search-icon').click(function(){
$('.search-input').slideToggle("slow");
});
});
