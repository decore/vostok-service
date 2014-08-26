$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container',{
    loop:true,
    grabCursor: true,
    paginationClickable: true,
    calculateHeight: true
  });
  $('.arrow-right').on('click', function(e){
    e.preventDefault();
    mySwiper.swipeNext();
  });
  $('.arrow-left').on('click', function(e){
    e.preventDefault();
    mySwiper.swipePrev();
  });

  $(".fancybox").fancybox();

  $(".footable").footable({
    breakpoints: {
      tablet: 800
    }
  });

  $('.menu-toggle').click(function(){
    $('body').toggleClass('active');
  });

  var googleForm = $(window).jqGoogleForms({"formKey": "1LljH0y7QgHBDCVl8nNPzO_xms6sGQ3FZsyzdC9VjWvI"});
  $('.form .btn-submit').click(function(e){
    e.preventDefault();
    var form = $(this).parents('.form');
    var name = form.find('#name').val();
    var phone = form.find('#phone').val();
    googleForm.sendFormData({
        "entry.860096774": name,
        "entry.68559078": phone
    });
    if (name && phone) {
      $('.alert-container').removeClass('hidden');
    }
    $('.modal').modal('hide');
  });
});
