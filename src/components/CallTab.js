import React from 'react';
import styles from '../styles/components/CallTab.scss';

class CallTab extends React.Component {
  render() {
    return <div className={styles.wrapper}>
      <h1>Enter your phone number</h1>
      <p>And I will call you back in 28 seconds</p>
      <form> 
        <input type="text" placeholder="+1 (___) ___-____" />
        <button type="submit">Call me</button>
      </form>
      <span>Or choose convinient time for call</span>
    </div>
  }
}

export default CallTab;