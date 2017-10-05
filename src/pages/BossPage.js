import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push as pushAction} from 'react-router-redux';
import styles from './LandingPage.module.scss';
import { Button} from 'semantic-ui-react';

import {
  addCoffeeAction
} from '../actions/coffee.actions';

export class BossPage extends React.Component {
  addCoffee = () => {
    this.props.addCoffeeAction()
  };

  render() {
    return (
      <div className={styles.content}>
        <Button onClick={this.addCoffee}>COFFEE!!!</Button>
        <Button onClick={() => this.props.pushAction('/')}>Go Back</Button>
      </div>
    )
  }
}

BossPage.propTypes = {
  pushAction: React.PropTypes.func.isRequired,
  addCoffeeAction: React.PropTypes.func.isRequired
};

//mapping of state to component props - data from store -> props
const mapStateToProps = (state) => ({

});

//maps actions to props
const mapDispatchToProps = (dispatch) => bindActionCreators({
  pushAction,
  addCoffeeAction
}, dispatch);

// connects mapStateToProps and mapDispatchToProps to this component
export default connect(mapStateToProps, mapDispatchToProps)(BossPage);//
