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
  loadTasksAction,
  deleteTaskAction,
  saveTaskAction,
  updateTaskAction
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
    this.props.loadTasksAction();
  }

  deleteTask = (taskId) => {
    this.props.deleteTaskAction(taskId);
  };

  //prefills form with task which should be edited
  editTask = (task) => {
    this.setState({updateFlag: true});
    this.setState({taskForm: task});
  };

  saveTask = () => {
    if(this.state.updateFlag) {
      this.props.updateTaskAction(this.state.taskForm);
      this.setState({updateFlag: false});
    } else {
      this.props.saveTaskAction(this.state.taskForm);
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
        <TaskWrapper tasks={this.props.tasks} onDeleteTask={this.deleteTask} onEditTask={this.editTask}/>
      </div>
    )
  }
}

LandingPage.propTypes = {
  pushAction: React.PropTypes.func.isRequired,
  loadTasksAction: React.PropTypes.func.isRequired,
  deleteTaskAction: React.PropTypes.func.isRequired,
  saveTaskAction: React.PropTypes.func.isRequired,
  updateTaskAction: React.PropTypes.func.isRequired
};

//mapping of state to component props - data from store -> props
const mapStateToProps = (state) => ({
  tasks: state.tasks.byId,
});

//maps actions to props
const mapDispatchToProps = (dispatch) => bindActionCreators({
  pushAction,
  loadTasksAction,
  deleteTaskAction,
  saveTaskAction,
  updateTaskAction
}, dispatch);

// connects mapStateToProps and mapDispatchToProps to this component
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
