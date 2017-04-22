import {normalizeArray} from '../utils/reducer.utils';

//TODO export reducer constants
export const SET_TASKS = 'SET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

//TODO deleteTask method - id of task is in payload, use: delete byId[id] on cloned object
const deleteTask = (state, payload) => {

};

//TODO const initialState object with byId property


export const taskReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    //TODO set tasks - returns state with normalized array

    //TODO save task - returns state with normalized array with added task

    //TODO update task - returns state with updated task

    //TODO delete task - returns state with deleted task

    default:
      return state;
  }
};
