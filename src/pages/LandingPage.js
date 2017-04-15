import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push as pushAction} from 'react-router-redux';

export class LandingPage extends React.Component {

  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}

LandingPage.propTypes = {
  pushAction: React.PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => bindActionCreators({pushAction}, dispatch);

export default connect(null, mapDispatchToProps)(LandingPage);
