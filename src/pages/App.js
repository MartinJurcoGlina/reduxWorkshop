import React from 'react';

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div >
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};
