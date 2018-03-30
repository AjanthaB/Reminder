import React, { Component } from "react";
import { connect } from "react-redux";

import { addReminder } from "../actions";


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  setReminderText(text) {
    this.setState({text});
  }

  addReminder() {
    this.props.addReminder(this.state.text);
  }

  render() {
    return (
      <div className="App"> 
        <div className="App-Title">
          Remider Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input 
              className="formControll" 
              placeholder="I have to..."
              onChange={event => this.setReminderText(event.target.value)}
              />
          </div>
          <button type="button"
            onClick={() => this.addReminder()}
            className="btn btn-success">
            Add Remider
          </button>
        </div>
      </div>
    )
  }
}

export default connect(null, { addReminder })(App);