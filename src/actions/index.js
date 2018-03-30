import { ADD_REMINDER } from "../constants";


export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  };
  console.log("add remider action", action);
  return action;
}