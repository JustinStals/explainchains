import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import './UserAuth.css';

const LogOutButton = (props) => (
  <button type="button" onClick={props.signOut} style={{color: props.color}}>
    Log out
  </button>
);

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(LogOutButton);