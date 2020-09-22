import '../styles/style.scss';

import Menu from "./modules/menu";
import VideoModal from "./modules/videoModal";
import dynamicRender from "./modules/dynamicRender";

window.addEventListener('DOMContentLoaded', function () {

  const mainMenu = new Menu('.menu', {
    trigger: '.menu__button',
    content: '.content'
  });

  dynamicRender('.menu', mainMenu.close.bind(mainMenu));
  window.addEventListener('resize', () => {
    dynamicRender('.menu', mainMenu.close.bind(mainMenu));
  })

  const videoModal = new VideoModal('.modal--video', '.button--play', '.modal__close', 'player');
})