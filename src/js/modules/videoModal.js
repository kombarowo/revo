import Modal from "./modal";
import calcScroll from "./calcScroll";

export default class VideoModal extends Modal {
  constructor(modal, trigger, close, playerId, ie = false) {
    super(modal, trigger, close);

    this.playerId = playerId;
    this.$player = document.getElementById(playerId);
    this.ie = ie;

    if (!ie) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }

  open() {
    if (this.ie) {
      open(this.$player.dataset.fullurl);
      return;
    }
    if (!this.player) {
      this.player = new YT.Player(this.playerId, {
        height: '100%%',
        width: '100%',
        videoId: this.$player.dataset.url,
      })
    }
    this.$el.classList.add('active');
    document.body.classList.add('scroll-lock');
    document.body.style.marginRight = calcScroll() + 'px';
  }

  close() {
    this.player.pauseVideo();
    this.$el.classList.remove('active');
    document.body.classList.remove('scroll-lock');
    document.body.style.marginRight = '';
  }
}