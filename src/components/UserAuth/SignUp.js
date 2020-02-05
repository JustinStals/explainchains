import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
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
            name: '',
            username: '',
            usernameTaken: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleUsernameChange = (e) => {
        let usernames = this.props.usernames;
        this.setState({
            [e.target.id]: e.target.value
        }, () => {
            if (this.state.username in usernames) {
                this.setState({
                    usernameTaken: true
                })
            } else {
                this.setState({
                    usernameTaken: false
                })
            }
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
    
    let usernameClasses = "username"

    if (this.state.usernameTaken) {
        usernameClasses = "username taken"
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
                            <input type="text" placeholder="Full name" id="name" onChange={this.handleChange}></input>
                        </div>
                        <div className="input-field">
                            <input type="text" placeholder="Username" id="username" onChange={this.handleUsernameChange}></input>
                            <div className={usernameClasses}>
                                <div />
                                <div />
                            </div>
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
        usernames: state.firestore.data.usernames,
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser => dispatch(signUp(newUser)))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'usernames' }
    ])
)(SignUp);