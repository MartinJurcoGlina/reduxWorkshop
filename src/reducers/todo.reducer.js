import {normalizeArray} from '../utils/reducer.utils';

//TODO expoprt reducer constants
export const SET_TODOS = 'SET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

//TODO deleteTodo method - id of todo is in payload, use: delete byId[id] on cloned object
const deleteTodo = (state, payload) => {

};

//TODO const initialState
const initialState = {
  byId: {},
};

export const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    //TODO set todos - returns state with normalized array
    case SET_TODOS:
      return {...state, byId: normalizeArray(payload)};
    //TODO save todo - returns state with normalized array with added todo
    case SAVE_TODO:
      return {...state, byId: {...state.byId, ...normalizeArray(payload)}};
    //TODO update todo - returns state with updated todo

    //TODO delete todo - returns state with deleted todo

    default:
      return state;
  }
};
