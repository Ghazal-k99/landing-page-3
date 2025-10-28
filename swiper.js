const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

 
  document.getElementById('nextBtn').addEventListener('click', () => swiper.slideNext());
  document.getElementById('prevBtn').addEventListener('click', () => swiper.slidePrev());