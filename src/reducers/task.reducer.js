import {normalizeArray} from '../utils/reducer.utils';

//TASK expoprt reducer constants
export const SET_TASKS = 'SET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

//TASK deleteTask method - id of task is in payload, use: delete byId[id] on cloned object
const deleteTask = (state, payload) => {

};

//TASK const initialState
const initialState = {
  byId: {},
};

export const taskReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    //TASK set tasks - returns state with normalized array
    case SET_TASKS:
      return {...state, byId: normalizeArray(payload)};
    //TASK save task - returns state with normalized array with added task

    //TASK update task - returns state with updated task

    //TASK delete task - returns state with deleted task

    default:
      return state;
  }
};
