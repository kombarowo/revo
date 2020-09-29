import 'swiper/swiper-bundle.css';
import '../styles/style.scss';
import './polyfills/foreach';

import smoothscroll from 'smoothscroll-polyfill';
import Menu from "./modules/menu";
import VideoModal from "./modules/videoModal";
import Swiper, {Navigation, Pagination} from 'swiper';
import Tabs from "./modules/tabs";
import animOnScroll from "./modules/animOnScroll";
import initAnchors from "./modules/anchors";
import dynamicRender from "./modules/dynamicRender";

Swiper.use([Navigation, Pagination]);

window.addEventListener('DOMContentLoaded', function () {
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  smoothscroll.polyfill();

  const mainMenu = new Menu('.menu', {
    trigger: '.menu__button',
    content: '.content'
  });
  dynamicRender('.menu', mainMenu.close.bind(mainMenu));

  window.addEventListener('resize', () => {
    dynamicRender('.menu', mainMenu.close.bind(mainMenu));
  })

  const videoModal = new VideoModal('.modal--video', '.button--play', '.modal__close', 'player', isIE11);
  initAnchors();

  const chooseSlider = new Swiper('.choose-slider', {
    allowTouchMove: false,
    wrapperClass: 'choose-slider__wrapper',
    slideClass: 'choose-slider__slide',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    slideActiveClass: 'choose-slider__slide--active',
    slideNextClass: 'choose-slider__slide--next',
    navigation: {
      nextEl: '.choose-slider__button--next',
      prevEl: '.choose-slider__button--prev',
      disabledClass: 'button--disabled',
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    }
  })

  const comboSlider = new Swiper('.combo__slider', {
    wrapperClass: 'combo__slider-wrapper',
    slideClass: 'combo__slide',
    slidesPerView: 1,
    slidesPerGroup: 1,
    slideActiveClass: 'combo__slide--active',
    slideNextClass: 'combo__slide--next',
    spaceBetween: 30,
    navigation: {
      nextEl: '.combo__button--next',
      prevEl: '.combo__button--prev',
      disabledClass: 'button--disabled'
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  })

  new Tabs({
    trigger: '.giftset__bullet',
    content: '.giftset__tab'
  });

  setTimeout(() => {
    animOnScroll();
  }, 100);
})