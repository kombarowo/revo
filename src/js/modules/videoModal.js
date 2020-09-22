import Modal from "./modal";

export default class VideoModal extends Modal {
  constructor(modal, trigger, close, playerId) {
    super(modal, trigger, close);

    this.playerId = playerId;
    this.$player = document.getElementById(playerId);
  }

  open() {
    if (!this.player) {
      this.player = new YT.Player(this.playerId, {
        height: '100%%',
        width: '100%',
        videoId: this.$player.dataset.url,
      })
    }
    this.$el.classList.add('active');
    document.body.classList.add('scroll-lock');
  }

  close() {
    this.player.pauseVideo();
    this.$el.classList.remove('active');
    document.body.classList.remove('scroll-lock');
  }
}