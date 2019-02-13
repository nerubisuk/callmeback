import React from 'react';
import styles from '../styles/components/MailTab.scss';

class MailTab extends React.Component {
  render() {
    return <div className={styles.wrapper}>
      <form> 
        <input type="text" placeholder="John Doe" />
        <input type="text" placeholder="+1 (___) ___-____" />
        <input type="text" placeholder="example@gmail.com" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  }
}

export default MailTab;
