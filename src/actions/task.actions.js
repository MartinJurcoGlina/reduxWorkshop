//TODO imports from reducer
import {
  SET_TASKS,
} from '../reducers/task.reducer';
import loaders from '../utils/loaderUtils';

/*
 * ACTIONS
 */
//TODO export const loadTasksAction, no parameter, load mock data using loaders from utils
export const loadTasksAction = () => async (dispatch) => {
  const tasks = await loaders.loadTasks();
  dispatch({type: SET_TASKS, payload: tasks});
};
//TODO deleteTaskAction parameter: taskId

//TODO saveTaskAction parameter: formData, create random id: Math.random().toString(36).substring(7);, payload: [formData]

//TODO updateTaskAction parameter: formData, payload: [formData]
