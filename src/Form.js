import React from 'react';
import "./Form.css";

class Form extends React.Component {
  state = { email: '' };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.email);
    this.setState({ email: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.email}
          onChange={event => this.setState({ email: event.target.value })}
          placeholder="email adress..." />
        <button className="register">Register</button>
      </form>
    );
  }
}

export default Form;
