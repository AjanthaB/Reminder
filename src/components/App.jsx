import React, { Component } from "react";
import { connect } from "react-redux";

import { addReminder, deleteReminder } from "../actions";
import moment from "moment";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      dueDate: ''
    };
  }

  setReminderText(text) {
    this.setState({text});
  }

  addReminder() {
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    console.log("rminder id: ", id);
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4"> 
        {
          reminders.map(reminder => {
            return (
              <li className="list-group-item" key={reminder.id}>
                <div className="list-item">
                  <div> { reminder.text } </div>
                  <div><em> { moment(new Date(reminder.dueDate)).fromNow()} </em></div>
                </div>
                
                <div 
                  onClick={() => this.deleteReminder(reminder.id)}
                  className="list-item delete-button">
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App"> 
        <div className="title">
          Remider Pro
        </div>

        <div className="reminder-form">
          <form>
            <div className="form-group">
              <input 
                className="form-control" 
                placeholder="I have to..."
                onChange={event => this.setReminderText(event.target.value)}
              />
              <input 
                className="form-control" 
                type="datetime-local"
                onChange={ event => this.setState({dueDate: event.target.value})}
              />
            </div>

            <button type="button" 
              onClick={() => this.addReminder()}
              className="btn btn-success save-btn">
              Add Remider
            </button>
          </form>
        </div>

        {this.renderReminders()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, { addReminder, deleteReminder })(App);