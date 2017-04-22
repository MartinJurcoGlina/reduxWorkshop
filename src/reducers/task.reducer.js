import {normalizeArray} from '../utils/reducer.utils';
export const SET_TASKS = 'SET_TASKS';
export const DELETE_TASK = 'DELETE_TASK';
export const SAVE_TASK = 'SAVE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

const deleteTask = (state, payload) => {
  const id = payload;

  const byId = {...state.byId};
  delete byId[id];

  return {...state, byId};
};

const initialState = {
  byId: {},
};

export const taskReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TASKS:
      return {...state, byId: normalizeArray(payload)};
    case SAVE_TASK:
      return {...state, byId: {...state.byId, ...normalizeArray(payload)}};
    case UPDATE_TASK:
      return {...state, byId: {...state.byId, [payload.id]: payload}};
    case DELETE_TASK:
      return deleteTask(state, payload);
    default:
      return state;
  }
};
