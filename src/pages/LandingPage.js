import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push as pushAction} from 'react-router-redux';
import styles from './LandingPage.module.scss';
import { Container, Header} from 'semantic-ui-react';
import {TaskForm} from '../components/taskForm';
import {TaskWrapper} from '../components/taskWrapper';

//TODO import actions
import {

} from '../actions/task.actions';

export class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskForm: {
        title: '',
        text: ''
      },
      updateFlag: false
    };
  }

  componentDidMount() {
    //TODO load tasks using loadTasksAction

  }

  // we use arrow function so  we don't have to use bind(this) in event handling
  deleteTask = (taskId) => {
    //TODO delete task using deleteTaskAction

  };

  //prefills form with task which should be edited
  editTask = (task) => {
    this.setState({updateFlag: true});
    this.setState({taskForm: task});
  };

  saveTask = () => {
    if(this.state.updateFlag) {
      //TODO update single task using updateTaskAction, reset updateFlag to false

    } else {
      //TODO save new task using saveTaskAction

    }
    this.formReset();
  };

  //resets form
  formReset = () => {
    this.setState({taskForm: {
      title: '',
      text: ''
    },
      updateFlag: false
    });
  };

  //sets internal state on changes in form fields
  onFormChange = (formData) => {
    this.setState({taskForm: {...this.state.taskForm, [formData.property]: formData.value}});
  };

  render() {
    //TODO send tasks from state to TaskWrapper as its prop
    return (
      <div className={styles.content}>
        <Header as='h2'>Redux Workshop Task Board App</Header>
        <TaskForm taskForm={this.state.taskForm}
                  updateFlag={this.state.updateFlag}
                  resetForm={this.formReset}
                  saveForm={this.saveTask}
                  formChangeHandler={this.onFormChange}/>
        <TaskWrapper tasks={{}} onDeleteTask={this.deleteTask} onEditTask={this.editTask}/>
      </div>
    )
  }
}

LandingPage.propTypes = {
  pushAction: React.PropTypes.func.isRequired,
  //TODO define propTypes for actions
};

//mapping of state to component props - data from store -> props
const mapStateToProps = (state) => ({
  //TODO map byId from store to props

});

//maps actions to props
const mapDispatchToProps = (dispatch) => bindActionCreators({
  pushAction,
  //TODO actions for tasks

}, dispatch);

// connects mapStateToProps and mapDispatchToProps to this component
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
