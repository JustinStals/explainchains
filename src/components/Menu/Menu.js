import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './Menu.css'


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        let menuClass = "menu";

        
        if (this.props.menuOpen) {
          menuClass = "menu open";
          
        }

        return (
            <div className={menuClass}>
                {/* <ul className="menu-list">
                    <li>
                        <NavLink
                            to="/"
                            onClick={this.props.menuToggle}
                        >Home</NavLink>
                    </li>
                </ul> */}
            </div> 
            
        )
    }

}

export default Menu
