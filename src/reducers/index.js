import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {taskReducer} from './task.reducer';

export const reducers = combineReducers({
  routing: routerReducer,
  tasks: taskReducer
});
