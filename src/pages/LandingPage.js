import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push as pushAction} from 'react-router-redux';
import styles from './LandingPage.module.scss';
import { Container, Header, Input, TextArea } from 'semantic-ui-react';
import {TodoForm} from '../components/todoForm';
import {TodoWrapper} from '../components/todoWrapper';

//TODO import actions
import {
  loadTodosAction,
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
    //TODO load todos using loadTodosAction
    this.props.loadTodosAction();
  }

  // we use arrow function so  we don't have to use bind(this) in event handling
  deleteTodo = (todoId) => {
    //TODO delete todo using deleteTodoAction

  };

  //prefills form with todo which should be edited
  editTodo = (todo) => {
    this.setState({updateFlag: true});
    this.setState({todoForm: todo});
  };

  saveTodo = () => {
    if(this.state.updateFlag) {
      //TODO update single toto using updateTodoAction, reset updateFlag to false

    } else {
      //TODO save new todo using saveTodoAction

    }
    this.formReset();
  };

  //resets form
  formReset = () => {
    this.setState({todoForm: {
      title: '',
      text: ''
    },
      updateFlag: false
    });
  };

  //sets internal state on changes in form fields
  onFormChange = (formData) => {
    this.setState({todoForm: {...this.state.todoForm, [formData.property]: formData.value}});
  };

  render() {
    return (
      <div className={styles.content}>
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

//mapping of state to component props - data from store -> props
const mapStateToProps = (state) => ({
  //TODO map byId from store to props
  todos: state.todos.byId,
});

//maps actions to props
const mapDispatchToProps = (dispatch) => bindActionCreators({
  pushAction,
  //TODO actions for todos
  loadTodosAction,
}, dispatch);

// connects mapStateToProps and mapDispatchToProps to this component
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
