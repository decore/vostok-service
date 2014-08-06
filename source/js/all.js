$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container',{
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    calculateHeight: true
  });
  $('.arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper.swipePrev()
  });
  $('.arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper.swipeNext()
  });
  $(".fancybox").fancybox({
    
  });

  $('.menu-toggle').click(function(){
    $('body').toggleClass('active');
  });

});
