import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './Home.css';
import SignUp from '../UserAuth/SignUp';
import TopMenu from '../TopMenu/TopMenu';
import BottomMenu from "../BottomMenu/BottomMenu";
import Post from '../Post/Post';


class Home extends Component {
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
                            activeSection="home"
                            BGColor={BGColor}
                            FGColor={FGColor}
                            toggleColorScheme={this.props.toggleColorScheme} 
                        />
                        <div className="home" style={{backgroundColor: BGColor, color: FGColor}}>
                            
                            <div className="feed">
                                <Post 
                                    BGColor={BGColor}
                                    FGColor={FGColor}
                                />
                                <Post 
                                    BGColor={BGColor}
                                    FGColor={FGColor}
                                />
                                <Post 
                                    BGColor={BGColor}
                                    FGColor={FGColor}
                                />
                                <p className="footnote">
                                    © 2020 EXPLAINCHAINS
                                </p>
                            </div>
                        </div>
                        <BottomMenu activeSection="home" BGColor={BGColor} FGColor={FGColor} />
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

export default connect(mapStateToProps)(Home);
