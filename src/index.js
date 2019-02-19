import React from 'react';
import ReactDOM from "react-dom";
import CallTab from './components/CallTab';
import MailTab from './components/MailTab';
import ChatTab from './components/ChatTab';
import styles from './styles/mycallback.scss';

class Widget extends React.Component {
  state = {
    isOpen: false,
    currentTab: 0,
    tabs: [
      {
        header: {
          p: "High Five Lab",
          s: "I will gladly get back to you"
        }
      },
      {
        header: {
          p: "Emma",
          s: "How can I help you?"
        }
      },
      {
        header: {
          p: "Write to us",
          s: "What is your e-mail address?"
        }
      }
    ]
  }

  renderTabContent = () => {
    const { currentTab } = this.state;

    switch (currentTab) {
      case 1:
        return <ChatTab />
      case 2:
        return <MailTab />
      default: 
        return <CallTab />
    }
  }

  handleSelectTab = (tab) => {
    this.setState({
      currentTab: tab
    })
  }

  handleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const { isOpen, tabs, currentTab } = this.state;
    
    return <React.Fragment>
      {/* Open/close button */}
      <button 
        onClick={this.handleOpen}
        className={styles.phone_button}
      >
        {
          !isOpen 
          ? <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84973 34.1503 0 22 0C9.84973 0 0 9.84973 0 22C0 28.0465 2.43927 33.5233 6.38751 37.5C7.97058 39.0945 1.5 44 1.5 44H22ZM33.5638 28.7425C34.1102 29.0157 34.2863 29.7102 33.9342 30.2095C33.3302 31.0661 32.5241 32.2025 32.4547 32.2653C25.6339 38.4649 5.55133 18.2791 12.0591 11.7152L14.1036 9.72704C14.5969 9.24734 15.416 9.39755 15.7069 10.0211L18.4205 15.8358C18.5911 16.2013 18.5253 16.6336 18.2537 16.9319L16.649 18.6943C14.6812 20.7252 23.8282 29.3657 25.8806 27.4131C25.931 27.3675 26.4829 26.7409 26.9118 26.2522C27.2121 25.91 27.7051 25.8131 28.1123 26.0167L33.5638 28.7425Z" />
            </svg>

          : <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84973 34.1503 0 22 0C9.84973 0 0 9.84973 0 22C0 34.1503 9.84973 44 22 44ZM15.825 15.2434C16.1471 14.9189 16.6695 14.9189 16.9916 15.2434L22 20.2878L27.0084 15.2434C27.3306 14.9189 27.8529 14.9189 28.175 15.2434L28.7584 15.8309C29.0805 16.1554 29.0805 16.6815 28.7584 17.006L23.75 22.0504L28.6583 26.994C28.9805 27.3185 28.9805 27.8446 28.6583 28.1691L28.075 28.7566C27.7528 29.0811 27.2305 29.0811 26.9083 28.7566L22 23.813L17.0917 28.7566C16.7695 29.0811 16.2472 29.0811 15.925 28.7566L15.3417 28.1691C15.0196 27.8446 15.0196 27.3185 15.3417 26.994L20.25 22.0504L15.2416 17.006C14.9195 16.6815 14.9195 16.1554 15.2416 15.8309L15.825 15.2434Z" />
            </svg>


        }
      </button>
      
      {/* Main widget window */}
      {isOpen && <div className={styles.chat_window}>

        {/* Header */}
        <div className={styles.chat_window_header}>
          <div className={styles.face}>
            <img src="https://randomuser.me/api/portraits/women/26.jpg" />
          </div>
          <div>
            <p>{tabs[currentTab].header.p}</p>
            <span>{tabs[currentTab].header.s}</span>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {this.renderTabContent()}
        </div>

        {/* Footer */}
        <div className={styles.chat_window_footer}>
          <button onClick={this.handleSelectTab.bind(this, 0)}>
            <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84973 0 0 9.84974 0 22C0 34.1503 9.84973 44 22 44ZM33.5638 29.7425C34.1102 30.0157 34.2863 30.7102 33.9342 31.2095C33.3302 32.0661 32.5241 33.2025 32.4547 33.2653C25.6339 39.4649 5.55133 19.2791 12.0591 12.7152L14.1036 10.727C14.5969 10.2473 15.416 10.3976 15.7069 11.0211L18.4205 16.8358C18.5911 17.2013 18.5253 17.6336 18.2537 17.9319L16.649 19.6943C14.6812 21.7252 23.8282 30.3657 25.8806 28.4131C25.931 28.3675 26.4829 27.7409 26.9118 27.2522C27.2121 26.91 27.7051 26.8131 28.1122 27.0167L33.5638 29.7425Z" />
            </svg>
          </button>
          <button onClick={this.handleSelectTab.bind(this, 1)}>
            <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84973 0 0 9.84974 0 22C0 34.1503 9.84973 44 22 44ZM14.6667 18.7692H29.8974V16.9231H14.6667V18.7692ZM14.6667 21.5385H29.8974V23.3846H14.6667V21.5385ZM14.6667 26.1538H22V28H14.6667V26.1538Z" />
            </svg>
          </button> 
          <button onClick={this.handleSelectTab.bind(this, 2)}>
            <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 0C9.8505 0 0 9.8505 0 22C0 34.1495 9.8505 44 22 44C34.1495 44 44 34.1495 44 22C44 9.8505 34.1495 0 22 0ZM32.7179 15.7949L22 23.1843L11.2821 15.7949H32.7179ZM32.7179 27.3333C32.7179 28.4379 31.8225 29.3333 30.7179 29.3333H13.2821C12.1775 29.3333 11.2821 28.4379 11.2821 27.3333V18.0513L22 25.3846L32.7179 18.0513V27.3333Z" />
            </svg>
          </button>
          <p className={styles.copyright}>Powered by&nbsp;
            <a href="https://mycallback.co">mycallback</a>&nbsp;
            <img src="https://s.w.org/images/core/emoji/11/svg/1f512.svg" />
          </p>
        </div>
      </div>}
    </React.Fragment>;
  }
}


window.onload = () => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", styles.wrapper);
  document.body.insertBefore(wrapper, document.body.firstChild);
  wrapper ? ReactDOM.render(<Widget />, wrapper) : false;
}