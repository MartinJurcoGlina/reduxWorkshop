import {
  SET_TODOS,
  DELETE_TODO,
  SAVE_TODO,
  UPDATE_TODO
} from '../reducers/todo.reducer';
import loaders from '../utils/loaderUtils';

/*
 * ACTIONS
 */
export const loadTodosAction = () => async (dispatch) => {
  const todos = await loaders.loadTodos();
  dispatch({type: SET_TODOS, payload: todos});
};

export const deleteTodoAction = (todoId) => (dispatch) => {
  dispatch({type: DELETE_TODO, payload: todoId});
};

export const saveTodoAction = (formData) => (dispatch) => {
  formData.id = Math.random().toString(36).substring(7);
  dispatch({type: SAVE_TODO, payload: [formData]});
};

export const updateTodoAction = (formData) => (dispatch) => {
  dispatch({type: UPDATE_TODO, payload: formData});
};
