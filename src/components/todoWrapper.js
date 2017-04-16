import React from 'react';
import {TodoItem} from './todoItem'

export class TodoWrapper extends React.Component {

  deleteHandler = (todoId) => {
    this.props.onDeleteTodo(todoId);
  };

  editHandler = (todo) => {
    this.props.onEditTodo(todo);
  };

  renderTodos = () =>
    Object.keys(this.props.todos).map(todoId => {
      const todo = this.props.todos[todoId];
      return (<TodoItem todo={todo} key={todoId}
                        onDeleteClick={this.deleteHandler}
                        onEditClick={this.editHandler}/>)
    });

  render() {
    return (
      <ul>
        {this.renderTodos()}
      </ul>
    );
  }
}

TodoWrapper.propTypes = {
  todos: React.PropTypes.object,
  onDeleteTodo: React.PropTypes.func.isRequired,
  onEditTodo: React.PropTypes.func.isRequired,
};
