import React from 'react';
import {TodoItem} from './todoItem'

// dummy component for todo items
export class TodoWrapper extends React.Component {

  //haandles delete todo by calling parent component method and sending todoId from specific todo item in it
  deleteHandler = (todoId) => {
    this.props.onDeleteTodo(todoId);
  };

  //haandles todo edit by calling parent component method and sending specific todo content as parameter
  editHandler = (todo) => {
    this.props.onEditTodo(todo);
  };

  // method to render Todo items which are passed from parent component as prop
  renderTodos = () =>
    Object.keys(this.props.todos).map(todoId => {
      const todo = this.props.todos[todoId];
      return (<TodoItem todo={todo} key={todoId}
                        onDeleteClick={this.deleteHandler}
                        onEditClick={this.editHandler}/>)
    });

  render() {
    return (
      <div>
        {this.renderTodos()}
      </div>
    );
  }
}

TodoWrapper.propTypes = {
  todos: React.PropTypes.object,
  onDeleteTodo: React.PropTypes.func.isRequired,
  onEditTodo: React.PropTypes.func.isRequired,
};
