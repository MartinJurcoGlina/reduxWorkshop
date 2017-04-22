import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

//dummy component which is filled with specific task data
export class TaskItem extends React.Component {

  //handles Delete button click, sends id of task which should be deleted
  onDeleteHandler = () => {
    this.props.onDeleteClick(this.props.task.id);
  };

  //handles Edit button click, sends task data of task which should be edited
  onEditHandler = () => {
    this.props.onEditClick(this.props.task);
  };

  render() {
    return (
      <Segment>
        <h3>{this.props.task.title}</h3>
        <p>{this.props.task.text}</p>
        <Button color='red' onClick={this.onDeleteHandler}>Delete</Button>
        <Button color='blue' onClick={this.onEditHandler}>Edit</Button>
      </Segment>
    )
  }
}

TaskItem.propTypes = {
  task: React.PropTypes.object.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired,
  onEditClick: React.PropTypes.func.isRequired,
};
