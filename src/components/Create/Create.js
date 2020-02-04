import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Create.css';
import SignUp from '../UserAuth/SignUp';
import TopMenu from '../TopMenu/TopMenu';
import BottomMenu from "../BottomMenu/BottomMenu"


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
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
                            activeSection="create"
                            BGColor={BGColor}
                            FGColor={FGColor}
                            toggleColorScheme={this.props.toggleColorScheme} 
                        />
                        <div className="create" style={{backgroundColor: BGColor, color: FGColor}}>
                            <h1>Create a chain</h1>
                            <form>
                                <div className="input-field">
                                    <input type="text" placeholder="Name" id="name" onChange={this.handleChange}></input>
                                </div>
                                <div className="input-field">
                                    <input type="text" placeholder="Description" id="description" onChange={this.handleChange}></input>
                                </div>
                                <h3>Add a link</h3>
                                <div className="input-field">
                                    <input type="text" placeholder="URL" id="url" onChange={this.handleChange}></input>
                                </div>
                                <div className="input-field">
                                    <input type="file" id="file" onChange={this.handleChange}></input>
                                </div>
                                <button className="btn">Save link</button>
                            </form>
                        </div>
                        <BottomMenu activeSection="create" BGColor={BGColor} FGColor={FGColor} />
                    </div>
                :
                    <SignUp />
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

export default connect(mapStateToProps)(Create);
