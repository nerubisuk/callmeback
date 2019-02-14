import React from 'react';
import styles from '../styles/components/ChatTab.scss';

class ChatTab extends React.Component {
  render() {
    return <div className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.message}>
          Hi there! How can I help you?
        </p>
      </div>
      <div className={styles.input}>
        <textarea placeholder="Compose your message" />
        <button>Send</button>
      </div>
    </div>
  }
}

export default ChatTab;