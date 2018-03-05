import {combineReducers} from 'redux';
import {taskReducer} from './tasks.reducer';

export const reducers = combineReducers({

    tasks: taskReducer
});

