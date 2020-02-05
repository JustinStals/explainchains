import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import './UserAuth.css'

class ResetPassword extends Component {
    state = {
        email: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
  render() {
      const { authError, auth } = this.props
      if(auth.uid) return <Redirect to='/' />
    return (
        <div className="component-wrap">
            <div className="flex-center">
                <form className="recover-form" onSubmit={this.handleSubmit}>
                    <h5>Reset Password</h5>
                    <NavLink className="recover-cancel" to="/login">Cancel</NavLink>
                    <div className="red-text">
                        { authError ? <p>{authError}</p> : null}
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email" id="email" onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <button className="recover-btn">Send Email</button>
                        
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
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (creds) => dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
