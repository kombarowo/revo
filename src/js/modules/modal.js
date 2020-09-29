import calcScroll from "./calcScroll";

export default class Modal {
  constructor(modal, trigger, close) {
    this.$el = document.querySelector(modal);
    this.$triggers = document.querySelectorAll(trigger);
    this.closeBtn = this.$el.querySelector(close);
    this.setup();
  }

  setup() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.closeByOverlay = this.closeByOverlay.bind(this);
    this.$triggers.forEach(item => {
      item.addEventListener('click', this.open);
    })
    this.closeBtn.addEventListener('click', this.close);
    this.$el.addEventListener('click', this.closeByOverlay);
  }

  closeByOverlay(e) {
    if (e.target === this.$el) {
      this.close();
    }
  }

  open() {
    this.$el.classList.add('active');
    document.body.marginRight = calcScroll() + 'px';
    document.body.classList.add('scroll-lock');
  }

  close() {
    this.$el.classList.remove('active');
    document.body.marginRight = '';
    document.body.classList.remove('scroll-lock');
  }

  toggle() {
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    if (this.$el.classList.contains('active')) {
      this.close();
    } else {
      this.open();
    }
  }
}