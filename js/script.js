document.addEventListener("DOMContentLoaded", function () {
    const swipertest = new Swiper("#SwiperTestemunhos", {
       slidesPerView: 1,
       spaceBetween: 40,
       breakpoints: { 600: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } },
       slidesCentered: true,
       // Navigation arrows
       navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
       },
       autoplay: {
          delay: 5000,
       },
       rewind: true,
    });
 
    const swiper = new Swiper("#SwiperParceiro", {
       slidesPerView: 5,
       rewind: true,
       centeredSlides: true,
       // Navigation arrows
       navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
       },
    });
 });
 