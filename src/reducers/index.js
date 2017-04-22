import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//import taskReducer
import {taskReducer} from './task.reducer';

//gathers all reducers in app and gives them nicknames
export const reducers = combineReducers({
  routing: routerReducer,
  //TODO add taskReducer reducer as tasks
  tasks: taskReducer
});
