export default class Tabs {
  constructor({trigger = '', content = ''} = {}) {
    this.$triggers = document.querySelectorAll(trigger);
    this.triggerClass = trigger;
    this.$contents = document.querySelectorAll(content);

    this.setup();
  }

  setup() {
    this.hideAll();
    this.showTab(0);
    this.showTab = this.showTab.bind(this);

    this.$triggers.forEach(item => {
      item.addEventListener('click', () => {
        this.showTab(+item.getAttribute('index'));
      })
    });
  }

  hideAll() {
    this.$contents.forEach(item => {
      item.style.display = 'none';
    });

    this.$triggers.forEach((item, index) => {
      item.setAttribute('index', index.toString());
      item.classList.remove('active');
    })
  }

  showTab(i) {
    this.hideAll();
    this.$contents[i].style.display = 'block';
    this.$triggers[i].classList.add('active');
    this.$contents[i].classList.add('fadeIn');
  }
}