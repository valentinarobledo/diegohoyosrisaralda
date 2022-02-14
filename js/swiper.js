var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

$('.menu-logo').on("click", function(){
  $('.side-menu').toggle()
  console.log('clic');
})
