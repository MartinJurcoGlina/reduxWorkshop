import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import styled from "styled-components";
import './task.css'


const Button = styled.button`
  border-radius: 6px;
  font-weight: bold;
  padding: 0.25em 2em;
  margin: 0.5em;
  background: transparent;
  color:#003087;
  border: 2px solid #003087;
 `;




export class Task extends React.Component {


    onCheckClick = (e) => {
     e.preventDefault();
       this.props.onCheckClick(this.props.task.id);
     };

    onCleanClick = (e) => {
        e.preventDefault();
       this.props.onCleanClick(this.props.task.id);
    };

    render(){
       const title = this.props.task.checked ? 'checkedTitle' : 'title';

        return (
            <div>
                <label>
                    <span className={title}>{this.props.task.title}</span>
                        <span>
                        <Button onClick={this.onCheckClick}>{this.props.task.checked ?'UN-CHECK' : 'CHECK'}</Button>
                        </span>
                        <Button  onClick={this.onCleanClick}>CLEAN</Button>
                </label>
            </div>
        )
    }
}

 Task.propTypes ={
        task:PropTypes.object,
        onCheckClick:PropTypes.func,
        onCleanClick:PropTypes.func,
};