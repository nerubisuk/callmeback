import React from 'react';
import styles from '../styles/components/CallTab.scss';
import axios from 'axios';''
import { 
  getUserID,
} from '../utils/helpers-common';

class CallTab extends React.Component {
  state = {
    url: 'https://www.mycallback.co/api/call/index.php',
    phone: null
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const cf_id = 66; // Узнать откуда берется этот айди

    const bodyFormData = new FormData();

    bodyFormData.set('user_hash', getUserID());
    bodyFormData.set('action', 'addCallMessage');
    bodyFormData.set('site_id', cf_id);
    bodyFormData.set('url', location.href);
    bodyFormData.set('phone', this.state.phone);

    axios({
      method: 'post',
      url: this.state.url,
      data: bodyFormData,
      config: { 
        headers: {'Content-Type': 'multipart/form-data' }
      }
    })
  }

  render() {
    return <div className={styles.wrapper}>
      <h1>Enter your phone number</h1>
      <p>And I will call you back in 28 seconds</p>
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleChange}
          type="text" 
          id="phone"
          placeholder="+1 (___) ___-____" 
        />
        <button type="submit">Call me</button>
      </form>
      <span>Or choose convinient time for call</span>
    </div>
  }
}

export default CallTab;