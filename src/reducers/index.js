import { ADD_REMINDER, DELETE_REMINDER } from "../constants";
import { bake_cookie, read_cookie } from "sfcookies"

const getReminder = (action) => {
  const { text, dueDate } = action;

  return {
    text,
    dueDate,
    id: Math.random()
  };
}

export const remindersReducer = (state = [], action) => {
  let reminders = null;
  state = read_cookie("reminders");

  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, getReminder(action)];
      bake_cookie("reminders", reminders);
      return reminders;

    case DELETE_REMINDER:
      reminders = state.filter( reminder => reminder.id !== action.id)
      bake_cookie("reminders", reminders);
      return reminders;

    default:
      return state;
  }
}

export default remindersReducer;