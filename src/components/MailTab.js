import React from 'react';
import styles from '../styles/components/MailTab.scss';
import axios from 'axios';
import { 
  getUserID,
} from '../utils/helpers-common';

class MailTab extends React.Component {
  state = {
    url: 'https://www.mycallback.co/api/mail/index.php',
    name: null,
    phone: null,
    email: null,
    message: null
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const cf_id = 66; // Узнать откуда берется этот айди

    const { name, phone, email, message } = this.state;

    const bodyFormData = new FormData();

    bodyFormData.set('user_hash', getUserID());
    bodyFormData.set('action', 'addMailMessage');
    bodyFormData.set('site_id', cf_id);
    bodyFormData.set('url', location.href);
    bodyFormData.set('name', name);
    bodyFormData.set('phone', phone);
    bodyFormData.set('email', email);
    bodyFormData.set('message', message);

    axios({
      method: 'post',
      url: this.state.url,
      data: bodyFormData,
      config: { 
        headers: {'Content-Type': 'application/x-www-form-urlencoded' }
      }
    })
  }

  render() {
    return <div className={styles.wrapper}>
      <form onSubmit={this.handleSubmit}> 
        <input 
          id="name"
          onChange={this.handleChange}
          type="text" 
          placeholder="John Doe" 
        />
        <input
          id="phone"
          onChange={this.handleChange}
          type="text" 
          placeholder="+1 (___) ___-____" 
        />
        <input
          id="email"
          onChange={this.handleChange}
          type="text" 
          placeholder="example@gmail.com" 
        />
        <textarea
          id="message"
          onChange={this.handleChange}
          placeholder="Enter your message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  }
}

export default MailTab;
