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
      close = document.querySelector(`.${styles.icon_close_hidden}`),
      chat = document.querySelector(`.${styles.chat_window}`);

    phone.classList.toggle(styles.icon_phone_hidden);
    close.classList.toggle(styles.icon_close_visible);

    this.isOpen 
      ? chat.classList.add(styles.chat_window_visible) 
      : chat.classList.replace(styles.chat_window_visible, styles.chat_window_hidden);
  }
}

const html = `
  <div class=${styles.wrapper}>
    <button class=${styles.phone_button}>
      <div class=${styles.jammer}></div>
        <svg class=${styles.icon_phone} viewBox="0 0 183 183">
          <path d="M91.5 0C40.9691 0 0 40.9691 0 91.5C0 142.031 40.9691 183 91.5 183C142.031 183 183 142.031 183 91.5C183 40.9691 142.031 0 91.5 0ZM117.768 135.931C89.6776 148.771 46.0855 64.0271 73.5431 49.7074L81.5722 45.75L94.8855 71.7436L86.9403 75.6552C78.5909 80.1311 95.9759 114.085 104.516 109.945L112.385 106.094L125.805 131.996L117.768 135.931V135.931Z" />
        </svg>
        <svg class=${styles.icon_close_hidden} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/>
        </svg>
    </button>

    <div class=${styles.chat_window}>

      <div class=${styles.chat_window_header}>
        <div class=${styles.face}>
          <img src="https://randomuser.me/api/portraits/women/26.jpg" />
        </div>
        <div>
          <p>High Five Lab</p>
          <span>I will gladly get back to you :)</span>
        </div>
      </div>

      <div class=${styles.call_me}>
        <h1>Enter your phone number</h1>
        <p>And I will call you back in 28 seconds</p>
        <form> 
          <input type="text" />
          <button type="submit">Call me</button>
        </form>
        <span>Or choose convinient time for call</span>
      </div>

      <div class=${styles.chat_window_footer}>
        <button>
          <svg class=${styles.icon_phone} viewBox="0 0 183 183">
            <path d="M91.5 0C40.9691 0 0 40.9691 0 91.5C0 142.031 40.9691 183 91.5 183C142.031 183 183 142.031 183 91.5C183 40.9691 142.031 0 91.5 0ZM117.768 135.931C89.6776 148.771 46.0855 64.0271 73.5431 49.7074L81.5722 45.75L94.8855 71.7436L86.9403 75.6552C78.5909 80.1311 95.9759 114.085 104.516 109.945L112.385 106.094L125.805 131.996L117.768 135.931V135.931Z" />
          </svg>
        </button>
        <button>
          <svg class=${styles.icon_messages} viewBox="0 0 183 183">
            <path d="M0 91.5C0 40.9691 40.9691 0 91.5 0C142.031 0 183 40.9691 183 91.5C183 142.031 142.031 183 91.5 183C40.9691 183 0 142.031 0 91.5ZM129 67.7368V57H54V125H96.7326V114.263H54.8721V96.3684H129V85.6316H54.8721V67.7368H129Z" />
          </svg>
        </button>
        <button>
          <svg class=${styles.icon_mail} viewBox="0 0 24 24">
            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/>
          </svg>        
        </button>
      </div>
      </div>
  </div>
`;

export default new Widget(html);




