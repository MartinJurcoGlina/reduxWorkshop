//TODO imports from reducer
import {
  SET_TASKS,
  DELETE_TASK,
  SAVE_TASK,
  UPDATE_TASK
} from '../reducers/task.reducer';
import loaders from '../utils/loaderUtils';

/*
 * ACTIONS
 */
export const loadTasksAction = () => async (dispatch) => {
  const tasks = await loaders.loadTasks();
  dispatch({type: SET_TASKS, payload: tasks});
};

export const deleteTaskAction = (taskId) => (dispatch) => {
  dispatch({type: DELETE_TASK, payload: taskId});
};

export const saveTaskAction = (formData) => (dispatch) => {
  formData.id = Math.random().toString(36).substring(7);
  dispatch({type: SAVE_TASK, payload: [formData]});
};

export const updateTaskAction = (formData) => (dispatch) => {
  dispatch({type: UPDATE_TASK, payload: formData});
};
