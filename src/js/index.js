import '../styles/style.scss';
import './polyfills/foreach';

import smoothscroll from 'smoothscroll-polyfill';
import Menu from "./modules/menu";
import VideoModal from "./modules/videoModal";
import animOnScroll from "./modules/animOnScroll";
import initAnchors from "./modules/anchors";
import dynamicRender from "./modules/dynamicRender";

window.addEventListener('DOMContentLoaded', function () {
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
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

  setTimeout(() => {
    animOnScroll();
  }, 100);
})