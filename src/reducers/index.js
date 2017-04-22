import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

//TODO import taskReducer

//gathers all reducers in app and gives them nicknames
export const reducers = combineReducers({
  routing: routerReducer,
  //TODO add taskReducer as tasks

});
