import React from 'react';
import '../stylesheets/main.scss';
import styles from './App.module.scss'

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};
