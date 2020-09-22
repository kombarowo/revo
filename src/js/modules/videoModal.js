import Modal from "./modal";

export default class VideoModal extends Modal {
  constructor(modal, trigger, close, playerId) {
    super(modal, trigger, close);

    this.playerId = playerId;
    this.$player = document.getElementById(playerId);
  }

  open() {
    console.log(this.$player)
    if (!this.player) {
      this.player = new YT.Player(this.playerId, {
        height: '360',
        width: '640',
        videoId: this.$player.dataset.url,
      })
    }
    this.$el.classList.add('active');
    document.body.classList.add('scroll-lock');
  }

  close() {
    console.log(this.player);
    this.player.pauseVideo();
    this.$el.classList.remove('active');
    document.body.classList.remove('scroll-lock');
  }
}