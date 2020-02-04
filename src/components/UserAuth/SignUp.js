import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import { NavLink } from 'react-router-dom';
import './UserAuth.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordRepeat: '',
            firstName: '',
            lastName: '',
            userName: '',

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
  render() {
    const { auth, authError } = this.props
    if (auth.uid) {
        return <Redirect to='/' />
    } 
    
    return (
        <div className="component-wrap">
            <div className="flex-center">
                <form onSubmit={this.handleSubmit}>
                    <h5>Sign Up</h5>
                    <div className="red-text">
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                    <div className="inputs">
                        <div className="input-field">
                            <input type="email" placeholder="Email" id="email" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <input className="half-width" type="text" placeholder="First name" id="firstName" onChange={this.handleChange}></input>
                            <input className="half-width" type="text" placeholder="Last name" id="lastName" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Password" id="password" onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div>
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="space-between">
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/reset-password">Forgot Password?</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
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
        signUp: (newUser => dispatch(signUp(newUser)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
