//TODO imports from reducer
import {
  SET_TODOS,
  DELETE_TODO,
  SAVE_TODO,
} from '../reducers/todo.reducer';
import loaders from '../utils/loaderUtils';

/*
 * ACTIONS
 */
//TODO export const loadTodosAction, no parameter, load mock data using loaders from utils
export const loadTodosAction = () => async (dispatch) => {
  const todos = await loaders.loadTodos();
  dispatch({type: SET_TODOS, payload: todos});
};
//TODO deleteTodoAction parameter: todoId
export const deleteTodoAction = (todoId) => (dispatch) => {
  dispatch({type: DELETE_TODO, payload: todoId});
};
//TODO saveTodoAction parameter: formData, create random id, payload: [formData]
export const saveTodoAction = (formData) => (dispatch) => {
  formData.id = Math.random().toString(36).substring(7);
  dispatch({type: SAVE_TODO, payload: [formData]});
};
//TODO updateTodoAction parameter: formData, payload: [formData]
