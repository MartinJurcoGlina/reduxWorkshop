 import React from "react";
import  {Task} from "./task.js";
import { render } from "react-dom";
import PropTypes from "prop-types";

export class TaskWrapper extends React.Component {

    onCheckClick = (taskId) => {
        this.props.onCheckClick(taskId)
    };

    onCleanClick = (taskId) => {
       this.props.onCleanClick(taskId)
    };

    renderTasks = () =>
       Object.keys(this.props.tasks).map(taskId => {
       const task = this.props.tasks[taskId];
       return (
           <Task key={taskId} onCleanClick={this.onCleanClick} onCheckClick={this.onCheckClick} task={task}/>
       )
    });


    render () {
        return (
            <div>
                {this.renderTasks()}
            </div>
        );
    }
}

TaskWrapper.propTypes ={
    tasks: PropTypes.object,
    onCheckClick:PropTypes.func,
    onCleanClick:PropTypes.func,
};


