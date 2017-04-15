import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {todoReducer} from './todo.reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  todos: todoReducer
});
