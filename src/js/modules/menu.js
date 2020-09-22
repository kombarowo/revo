export default class Menu {
  constructor(menu, {trigger = '', content = ''} = {}) {
    this.$el = document.querySelector(menu);
    this.$trigger = document.querySelector(trigger);
    this.$content = content ? document.querySelector(content) : '';

    this.setup();
  }

  setup() {
    this.toggle = this.toggle.bind(this);
    this.$trigger.addEventListener('click', this.toggle);
  }

  open() {
    this.$el.classList.add('active');
    this.$trigger.classList.add('active');
    if (this.$content) {
      this.$content.classList.add('active');
    }
  }

  close() {
    this.$el.classList.remove('active');
    this.$trigger.classList.remove('active');
    if (this.$content) {
      this.$content.classList.remove('active');
    }
  }

  toggle() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    if (this.$el.classList.contains('active')) {
      this.close();
    } else {
      this.open();
    }
  }
}