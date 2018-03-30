import { ADD_REMINDER } from "../constants";


const getReminder = (action) => {
  return {
    text: action.payload,
    id: Math.random()
  };
}

export const remindersReducer = (state = [], action) => {

  let reminders = null;

  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, getReminder(action)];
      console.log(reminders);
      return reminders;
  
    default:
      return state;
  }
}

export default remindersReducer;