import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push as pushAction} from 'react-router-redux';
import { Container, Header, Input, TextArea } from 'semantic-ui-react';
import {TodoForm} from '../components/todoForm';
import {TodoWrapper} from '../components/todoWrapper';
import {
  loadTodosAction,
  deleteTodoAction,
  saveTodoAction,
  updateTodoAction
} from '../actions/todo.actions';

export class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todoForm: {
        title: '',
        text: ''
      },
      updateFlag: false
    };
  }

  componentDidMount() {
    this.props.loadTodosAction();
  }

  deleteTodo = (todoId) => {
    this.props.deleteTodoAction(todoId);
  };

  editTodo = (todo) => {
    this.setState({updateFlag: true});
    this.setState({todoForm: todo});
  };

  saveTodo = () => {
    if(this.state.updateFlag) {
      this.props.updateTodoAction(this.state.todoForm);
      this.setState({updateFlag: false});
    } else {
      this.props.saveTodoAction(this.state.todoForm);
    }
    this.formReset();
  };

  formReset = () => {
    this.setState({todoForm: {
      title: '',
      text: ''
    },
      updateFlag: false
    });
  };

  onFormChange = (formData) => {
    this.setState({todoForm: {...this.state.todoForm, [formData.property]: formData.value}});
  };

  render() {
    return (
      <div>
        <Header as='h2'>Redux Workshop Todo App</Header>
        <TodoForm todoForm={this.state.todoForm}
                  updateFlag={this.state.updateFlag}
                  resetForm={this.formReset}
                  saveForm={this.saveTodo}
                  formChangeHandler={this.onFormChange}/>
        <TodoWrapper todos={this.props.todos} onDeleteTodo={this.deleteTodo} onEditTodo={this.editTodo}/>
      </div>
    )
  }
}

LandingPage.propTypes = {
  pushAction: React.PropTypes.func.isRequired,
  loadTodosAction: React.PropTypes.func.isRequired,
  deleteTodoAction: React.PropTypes.func.isRequired,
  saveTodoAction: React.PropTypes.func.isRequired,
  updateTodoAction: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  todos: state.todos.byId,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  pushAction,
  loadTodosAction,
  deleteTodoAction,
  saveTodoAction,
  updateTodoAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
