import {normalizeArray} from '../utils/reducer.utils';
export const SET_TODOS = 'SET_TODOS';
export const DELETE_TODO = 'DELETE_TODO';
export const SAVE_TODO = 'SAVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const deleteTodo = (state, payload) => {
  const id = payload;

  const byId = {...state.byId};
  delete byId[id];

  return {...state, byId};
};

const initialState = {
  byId: {},
};

export const todoReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_TODOS:
      return {...state, byId: normalizeArray(payload)};
    case SAVE_TODO:
      return {...state, byId: {...state.byId, ...normalizeArray(payload)}};
    case UPDATE_TODO:
      return {...state, byId: {...state.byId, [payload.id]: payload}};
    case DELETE_TODO:
      return deleteTodo(state, payload);
    default:
      return state;
  }
};
