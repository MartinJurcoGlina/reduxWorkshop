import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

//dummy component which is filled with specific todo data
export class TodoItem extends React.Component {

  //handles Delete button click, sends id of todo which should be deleted
  onDeleteHandler = () => {
    this.props.onDeleteClick(this.props.todo.id);
  };

  //handles Edit button click, sends todo data of todo which should be edited
  onEditHandler = () => {
    this.props.onEditClick(this.props.todo);
  };

  render() {
    return (
      <Segment>
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.text}</p>
        <Button color='red' onClick={this.onDeleteHandler}>Delete</Button>
        <Button color='blue' onClick={this.onEditHandler}>Edit</Button>
      </Segment>
    )
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onDeleteClick: React.PropTypes.func.isRequired,
  onEditClick: React.PropTypes.func.isRequired,
};
