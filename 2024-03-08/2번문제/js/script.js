$(function(){
    $('.nav').hover(function(){
      $('.nav>ul>li>ul>li').fadeToggle();
    });

});


$(function(){
  $('.eventbox').slick({
      slidesToShow: 1,
      autoplay: true,
      infinite : true,  //무한 반복 옵션  
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
    });
});




    
    