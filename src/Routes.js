import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './components/UserAuth/SignUp';
import LogIn from './components/UserAuth/LogIn';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import Create from './components/Create/Create';
import Saved from './components/Saved/Saved';
import Profile from './components/Profile/Profile';
import ResetPassword from './components/UserAuth/ResetPassword';
import * as PATHWAYS from './constants/Pathways'
import './index.css';


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            colorScheme: "light"
        }
    }

    menuToggle = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    };
    
    toggleColorScheme = (color) => {
        if (color === "light") {
            this.setState({ colorScheme: "light"})
        } else {
            this.setState({ colorScheme: "dark"})
        }
    }


    render() {
        const { menuOpen, colorScheme } = this.state;        
        let BGColor = "#FFF"
        if (this.state.colorScheme === "dark") {
            BGColor = "#000"
        }
        return (
            <div className="app" style={{backgroundColor: BGColor}}>
                <Router>
                    <Route
                        exact path={PATHWAYS.SIGNUP}
                        render={(props) => <SignUp {...props}
                        />}
                    />
                    <Route
                        exact path={PATHWAYS.LOGIN}
                        render={(props) => <LogIn {...props}
                        />}
                    />
                    <Route
                        path={PATHWAYS.RESETPASSWORD}
                        ref={this.myRef}
                        render={(props) => <ResetPassword {...props}
                        />}
                    />
                    <Route
                        exact path={PATHWAYS.HOME}
                        render={(props) => <Home {...props}
                        menuOpen={menuOpen}
                        colorScheme={colorScheme}
                        toggleColorScheme={this.toggleColorScheme} 
                        />}
                    />
                    <Route
                        exact path={PATHWAYS.SEARCH}
                        render={(props) => <Search {...props}
                        menuOpen={menuOpen}
                        colorScheme={colorScheme}
                        toggleColorScheme={this.toggleColorScheme}
                        />}
                    />
                    <Route
                        exact path={PATHWAYS.CREATE}
                        render={(props) => <Create {...props}
                        menuOpen={menuOpen}
                        colorScheme={colorScheme}
                        toggleColorScheme={this.toggleColorScheme}
                        />}
                    />
                    <Route
                        exact path={PATHWAYS.SAVED}
                        render={(props) => <Saved {...props}
                        menuOpen={menuOpen}
                        colorScheme={colorScheme}
                        toggleColorScheme={this.toggleColorScheme}
                        />}
                    />
                    <Route
                        path={PATHWAYS.PROFILE}
                        ref={this.myRef}
                        render={(props) => <Profile {...props}
                        menuOpen={menuOpen}
                        colorScheme={colorScheme}
                        toggleColorScheme={this.toggleColorScheme}
                        />}
                    />
                </Router>
            </div>
        )
    }
}

export default Routes;