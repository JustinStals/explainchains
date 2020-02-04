import React, { Component } from 'react';
import './Search.css';
import TopMenu from '../TopMenu/TopMenu';
import BottomMenu from "../BottomMenu/BottomMenu"


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let BGColor = "#FFF"
        let FGColor = "#000"
        if (this.props.colorScheme === "dark") {
            BGColor = "#000"
            FGColor = "#FFF"
        }
        return (
            <div className="container">
                <TopMenu
                    activeSection="search"
                    BGColor={BGColor}
                    FGColor={FGColor}
                    toggleColorScheme={this.props.toggleColorScheme} 
                />
                <div className="search" style={{backgroundColor: BGColor, color: FGColor}}>
                    <h1>Search</h1>
                </div>
                <BottomMenu activeSection="search" BGColor={BGColor} FGColor={FGColor} />
            </div>
        )
    }
}

export default Search

