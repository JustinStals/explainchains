import React, { Component } from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../Profile.css';
import SignUp from '../../UserAuth/SignUp';
import TopMenu from '../../TopMenu/TopMenu';
import { Redirect, NavLink } from 'react-router-dom';
import BottomMenu from '../../BottomMenu/BottomMenu';
import MissingPage from '../../MissingPage/MissingPage';
import { deleteAccount, reauthenticate } from '../../../store/actions/authActions';


class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { auth, profile, authError} = this.props;

        let BGColor = "#FFF"
        let FGColor = "#000"
        if (this.props.colorScheme === "dark") {
            BGColor = "#000"
            FGColor = "#FFF"
        }
            
        if (auth.isLoaded) {
            return (
                auth.uid ?
                    <div className="container">
                        <TopMenu
                            activeSection="profile"
                            BGColor={BGColor}
                            FGColor={FGColor}
                            toggleColorScheme={this.props.toggleColorScheme} 
                        />
                        <div className="profile" style={{backgroundColor: BGColor, color: FGColor}}>
                            <div>
                                <div className="user">
                                    <div className="image">
                                        <button>
                                            <img src={profile.image}></img>
                                        </button>
                                    </div>
                                    <div className="name">
                                        <h1>{profile.name}</h1>
                                    </div>
                                    <div className="edit">
                                        <NavLink to="/edit-profile"></NavLink>
                                    </div>
                                </div>
                                <div className="stats">
                                    <ul>
                                        <li><p>{profile.numChains} <span>chains</span></p></li>
                                        <li><p>{profile.numFollowers} <span>followers</span></p></li>
                                        <li><p>{profile.numFollowing} <span>following</span></p></li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="delete-account">
                                { authError
                                ? 
                                <p> {authError}</p>
                                : null 
                                }
                                <button type="button" onClick={this.props.deleteAccount}>
                                    Delete my account
                                </button>
                            </div>
                        </div>
                        <BottomMenu activeSection="profile" BGColor={BGColor} FGColor={FGColor} />
                    </div>
                :
                    <Redirect to='/signup' />
            )
        } else {
            return (
                <div className="loading">
                    <p>Loading</p>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      deleteAccount: () => dispatch(deleteAccount()),
      reauthenticate: () => dispatch(reauthenticate())
    }
  }

export default compose(connect(mapStateToProps, mapDispatchToProps))(EditProfile);
