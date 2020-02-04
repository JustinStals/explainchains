import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Saved.css';
import SignUp from '../UserAuth/SignUp';
import TopMenu from '../TopMenu/TopMenu';
import { Redirect } from 'react-router-dom';
import BottomMenu from "../BottomMenu/BottomMenu";


class Saved extends Component {
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
                            activeSection="saved"
                            BGColor={BGColor}
                            FGColor={FGColor}
                            toggleColorScheme={this.props.toggleColorScheme} 
                        />
                        <div className="saved" style={{backgroundColor: BGColor, color: FGColor}}>
                            <h1>Saved</h1>
                        </div>
                        <BottomMenu activeSection="saved" BGColor={BGColor} FGColor={FGColor} />
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

export default connect(mapStateToProps)(Saved);
