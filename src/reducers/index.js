import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//import todoReducer
import {todoReducer} from './todo.reducer';

//gathers all reducers in app and gives them nicknames
export const reducers = combineReducers({
  routing: routerReducer,
  //TODO add todoReducer reducer as todos
  todos: todoReducer
});
