import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

let swiper; // Переменная для хранения экземпляра Swiper

function initializeSwiper() {
  // Убедитесь, что Swiper инициализирован только один раз
  if (swiper) return;

  swiper = new Swiper('.review-swiper', {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerColumn: 4,
    // slidesPerColumnFill: 'row',
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    breakpoints: {
      // 640: {
      // slidesPerView: 1,
      // spaceBetween: 20,
      // },
      850: {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerColumn: 4,
      },
      // 1024: {
      //   slidesPerView: 4,
      //   spaceBetween: 40,
      // },
    },
  });
}

function destroySwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function handleResize() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= 1150) {
    document.querySelector('.review-items').classList.add('swiper-wrapper');
    initializeSwiper();
  } else {
    document.querySelector('.review-items').classList.remove('swiper-wrapper');
    destroySwiper();
  }
}

// Выполните функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
