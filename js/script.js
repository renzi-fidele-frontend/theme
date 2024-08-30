document.addEventListener("DOMContentLoaded", function () {
   const swiper = new Swiper("#SwiperParceiro", {
      slidesPerView: "auto",
      breakpoints: { 500: { slidesPerView: 2 }, 1200: { slidesPerView: 5 } },
      slideToClickedSlide: true,
      rewind: true,
      centeredSlides: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
   });

   const swipertest = new Swiper("#SwiperTestemunhos", {
      slidesPerView: "auto",
      spaceBetween: 40,
      breakpoints: { 700: { slidesPerView: 2 }, 1200: { slidesPerView: "auto" } },
      rewind: true,
      slidesCentered: true,
      slideToClickedSlide: true,
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      autoplay: {
         delay: 5000,
      },
   });
});
