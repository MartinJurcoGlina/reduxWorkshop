import {SAVE_TASK} from '../reducers/task.reducer';

export const addCoffeeAction = () => (dispatch, getState) => {
  if(Object.values(getState().tasks.byId).length < 5) {
    dispatch({type: SAVE_TASK, payload: [{title: 'IMPORTANT!', text: 'BRING ME COFFEE!!!!!!!!', id: Math.random().toString(36).substr(8)}]});
  }
};
