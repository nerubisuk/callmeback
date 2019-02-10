// https://scotch.io/tutorials/setting-up-webpack-for-any-project
// https://www.valentinog.com/blog/react-webpack-babel/
import styles from './styles/mycallback.co.scss';

function isFunction(functionToCheck) {
  return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
 }

class Widget {
  constructor(html) {
    
    /* State */
    this.html = html;
    this.actions = {};
    this.isOpen = false;

    /* Init functions */
    this.onRender(document.body);
    this.createListeners();
    this.createActions();
  }

  createActions() {
    const actions = this.actions,
      evaluable = [
        {
          class: styles.phone_button,
          func: this.handleOpen
        } 
      ]

    evaluable.forEach(item => {
      Object.defineProperty(actions, item.class, {
        value: item.func,
        writable: false
      });
    })
  }

  createElement(str) {
    const div = document.createElement('div');
    div.innerHTML = str;
    return div;
  }

  createListeners() {
    document.addEventListener('click', e => {
      if (
          e.target 
          && isFunction(this.actions[e.target.parentNode.className])
        ) {
        this.actions[e.target.parentNode.className]()
      }
    })
  }

  onRender(body) {
    const wrapper = this.createElement(this.html);

    while (wrapper.children.length > 0) {
      body.appendChild(wrapper.children[0]);
    }
  }

  handleOpen() {
    this.isOpen = !this.isOpen;

    const phone = document.querySelector(`.${styles.icon_phone}`),
      close = document.querySelector(`.${styles.icon_close_hidden}`);

    phone.classList.toggle(styles.icon_phone_hidden);
    close.classList.toggle(styles.icon_close_visible);
  }
}

const html = `
  <div class=${styles.wrapper}>
    <div class=${styles.phone_button}>
      <div class=${styles.jammer}></div>
        <svg class=${styles.icon_phone} viewBox="0 0 183 183">
          <path d="M91.5 0C40.9691 0 0 40.9691 0 91.5C0 142.031 40.9691 183 91.5 183C142.031 183 183 142.031 183 91.5C183 40.9691 142.031 0 91.5 0ZM117.768 135.931C89.6776 148.771 46.0855 64.0271 73.5431 49.7074L81.5722 45.75L94.8855 71.7436L86.9403 75.6552C78.5909 80.1311 95.9759 114.085 104.516 109.945L112.385 106.094L125.805 131.996L117.768 135.931V135.931Z" />
        </svg>
        <svg class=${styles.icon_close_hidden} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/>
        </svg>
    </div>
  </div>
`;

export default new Widget(html);




