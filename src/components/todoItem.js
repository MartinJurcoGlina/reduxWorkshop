import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

export class TodoItem extends React.Component {

  onDeleteHandler = () => {
    this.props.onDeleteClick(this.props.todo.id);
  };

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
