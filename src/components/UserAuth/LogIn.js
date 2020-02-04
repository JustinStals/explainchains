import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './UserAuth.css';

class LogIn extends Component {
    state = {
        email: '',
        password: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logIn(this.state)
    }
  render() {
    const { authError, auth } = this.props
    if (auth.uid) {
        return <Redirect to='/' />
    } else {
        return (
            <div className="component-wrap">
                <div className="flex-center">
                    <form onSubmit={this.handleSubmit}>
                        <h5>Log In</h5>
                        <div className="red-text">
                            { authError ? <p>{authError}</p> : null}
                        </div>
                        <div className="inputs">
                            <div className="input-field">
                                <input type="email" placeholder="Email" id="email" onChange={this.handleChange}></input>
                            </div>
                            <div className="input-field">
                                <input type="password" placeholder="Password" id="password" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                        <div className="space-between">
                            <NavLink to="/signup">Sign Up</NavLink>
                            <NavLink to="/reset-password">Forgot Password?</NavLink>
                        </div>
                    </form>
                    
                </div>
          </div>
        )
    }
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.firebase.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)
