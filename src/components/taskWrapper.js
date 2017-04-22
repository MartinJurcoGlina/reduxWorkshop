import React from 'react';
import {TaskItem} from './taskItem'

// dummy component for task items
export class TaskWrapper extends React.Component {

  //haandles delete task by calling parent component method and sending taskId from specific task item in it
  deleteHandler = (taskId) => {
    this.props.onDeleteTask(taskId);
  };

  //haandles task edit by calling parent component method and sending specific task content as parameter
  editHandler = (task) => {
    this.props.onEditTask(task);
  };

  // method to render Task items which are passed from parent component as prop
  renderTasks = () =>
    Object.keys(this.props.tasks).map(taskId => {
      const task = this.props.tasks[taskId];
      return (<TaskItem task={task} key={taskId}
                        onDeleteClick={this.deleteHandler}
                        onEditClick={this.editHandler}/>)
    });

  render() {
    return (
      <div>
        {this.renderTasks()}
      </div>
    );
  }
}

TaskWrapper.propTypes = {
  tasks: React.PropTypes.object,
  onDeleteTask: React.PropTypes.func.isRequired,
  onEditTask: React.PropTypes.func.isRequired,
};
