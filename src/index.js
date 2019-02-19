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
    
    return <ReactFragment>
      {/* Open/close button */}
      <button 
        onClick={this.handleOpen}
        className={styles.phone_button}
      >
        {
          !isOpen 
          ? <svg viewBox="0 0 183 183">
            <path d="M91.5 0C40.9691 0 0 40.9691 0 91.5C0 142.031 40.9691 183 91.5 183C142.031 183 183 142.031 183 91.5C183 40.9691 142.031 0 91.5 0ZM117.768 135.931C89.6776 148.771 46.0855 64.0271 73.5431 49.7074L81.5722 45.75L94.8855 71.7436L86.9403 75.6552C78.5909 80.1311 95.9759 114.085 104.516 109.945L112.385 106.094L125.805 131.996L117.768 135.931V135.931Z" />
          </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"/>
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
            <svg viewBox="0 0 183 183">
              <path d="M91.5 0C40.9691 0 0 40.9691 0 91.5C0 142.031 40.9691 183 91.5 183C142.031 183 183 142.031 183 91.5C183 40.9691 142.031 0 91.5 0ZM117.768 135.931C89.6776 148.771 46.0855 64.0271 73.5431 49.7074L81.5722 45.75L94.8855 71.7436L86.9403 75.6552C78.5909 80.1311 95.9759 114.085 104.516 109.945L112.385 106.094L125.805 131.996L117.768 135.931V135.931Z" />
            </svg>
          </button>
          <button onClick={this.handleSelectTab.bind(this, 1)}>
            <svg viewBox="0 0 183 183">
              <path d="M0 91.5C0 40.9691 40.9691 0 91.5 0C142.031 0 183 40.9691 183 91.5C183 142.031 142.031 183 91.5 183C40.9691 183 0 142.031 0 91.5ZM129 67.7368V57H54V125H96.7326V114.263H54.8721V96.3684H129V85.6316H54.8721V67.7368H129Z" />
            </svg>
          </button>
          <button onClick={this.handleSelectTab.bind(this, 2)}>
            <svg viewBox="0 0 24 24">
              <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/>
            </svg>        
          </button>
        </div>
      </div>}
    </ReactFragment>;
  }
}


window.onload = () => {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", styles.wrapper);
  document.body.insertBefore(wrapper, document.body.firstChild);
  wrapper ? ReactDOM.render(<Widget />, wrapper) : false;
}