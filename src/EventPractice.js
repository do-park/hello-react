import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick = () => {
    alert(this.state.username + ':' + this.state.message);
    this.setState({
      username: '',
      message: ''
    });
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="input username"
          value={this.state.username}
          onChange={this.handleChange} />
        <input
          type="text"
          name="message"
          placeholder="input something..."
          value={this.state.message}
          onChange={this.handleChange} />
        <button onClick={this.handleClick}
        >Accept</button>
      </div>
    );
  }
}

export default EventPractice;