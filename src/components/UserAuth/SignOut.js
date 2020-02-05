import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import './UserAuth.css';

const LogOutButton = (props) => (
  <button type="button" onClick={props.logOut} style={{color: props.color}}>
    Log out
  </button>
);

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(LogOutButton);