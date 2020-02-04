import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Profile.css';
import SignUp from '../UserAuth/SignUp';
import TopMenu from '../TopMenu/TopMenu';
import { Redirect } from 'react-router-dom';
import BottomMenu from "../BottomMenu/BottomMenu"


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { auth, profile} = this.props;

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
                                        <h1>{profile.firstName} {profile.lastName}</h1>
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
                        </div>
                        <BottomMenu activeSection="profile" BGColor={BGColor} FGColor={FGColor} />
                    </div>
                :
                    <Redirect to='/signup' />
            )
        } else {
            return (
                <div>Loading</div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Profile);
