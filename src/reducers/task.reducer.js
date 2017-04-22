import {normalizeArray} from '../utils/reducer.utils';

//TASK expoprt reducer constants
export const SET_TASKS = 'SET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

//TODO deleteTask method - id of task is in payload, use: delete byId[id] on cloned object
const deleteTask = (state, payload) => {
  const id = payload;

  const byId = {...state.byId};
  delete byId[id];

  return {...state, byId};
};

//TODO const initialState
const initialState = {
  byId: {},
};

export const taskReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    //TODO set tasks - returns state with normalized array
    case SET_TASKS:
      return {...state, byId: normalizeArray(payload)};
    //TODO save task - returns state with normalized array with added task

    //TODO update task - returns state with updated task

    //TODO delete task - returns state with deleted task
    case DELETE_TASK:
      return deleteTask(state, payload);
    default:
      return state;
  }
};
