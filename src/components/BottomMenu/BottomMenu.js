    import React, { Component } from 'react'
    import { NavLink } from 'react-router-dom';
    import './BottomMenu.css'

    class BottomMenu extends Component {
        constructor(props) {
            super(props);
            this.state = {
            }
        }
        render() {
            return (
                <div className="bottom-menu" style={{backgroundColor: this.props.BGColor}}>
                    <ul>
                        <li>
                            <NavLink to="/">
                                <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <path d="M15,1 L29,15 L29,29 L17.8,29 L17.8,22 C17.8,20.4536027 16.5463973,19.2 15,19.2 C13.4536027,19.2 12.2,20.4536027 12.2,22 L12.2,29 L1,29 L1,15 L15,1 Z" stroke={this.props.FGColor} strokeWidth={2} fill={this.props.activeSection === "home" ? this.props.FGColor : "none"}/>
                                    </g>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">
                                <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g transform="translate(1.000000, 1.000000)" stroke={this.props.FGColor} strokeWidth={2}  strokeWidth={this.props.activeSection === "search" ? 5 : 2}>
                                        {   this.props.activeSection === "search" ?
                                            <circle cx="11.6707317" cy="11.6707317" r="9.6707317" /> :
                                            <circle cx="11.6707317" cy="11.6707317" r="11.6707317" />
                                        }
                                        {   this.props.activeSection === "search" ?
                                            <path d="M20.5121951,20.5121951 L26.5,26.5" strokeLinecap="round" /> :
                                            <path d="M20.5121951,20.5121951 L28.2926829,28.2926829" strokeLinecap="round" />
                                        }
                                    </g>
                                    </g>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/create">
                                <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinejoin="round">
                                    <path d="M17.0853659,1 C17.8666467,1 18.5,1.63335328 18.5,2.41463415 L18.499,11.5 L27.5853659,11.5 C28.3666467,11.5 29,12.1333533 29,12.9146341 L29,17.0853659 C29,17.8666467 28.3666467,18.5 27.5853659,18.5 L18.499,18.5 L18.5,27.5853659 C18.5,28.3666467 17.8666467,29 17.0853659,29 L12.9146341,29 C12.1333533,29 11.5,28.3666467 11.5,27.5853659 L11.499,18.5 L2.41463415,18.5 C1.63335328,18.5 1,17.8666467 1,17.0853659 L1,12.9146341 C1,12.1333533 1.63335328,11.5 2.41463415,11.5 L11.499,11.5 L11.5,2.41463415 C11.5,1.63335328 12.1333533,1 12.9146341,1 L17.0853659,1 Z" stroke={this.props.FGColor} strokeWidth={2} fill={this.props.activeSection === "create" ? this.props.FGColor : "none"} />
                                    </g>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/saved">
                                <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinejoin="round">
                                    <path d="M1,8.7 C1,4.44740743 4.44740743,1 8.7,1 C11.3043294,1 13.6066776,2.2929356 15.0001742,4.27193666 C16.3933224,2.2929356 18.6956706,1 21.3,1 C25.5525926,1 29,4.44740743 29,8.7 C29,14.7666667 24.3333333,21.5333333 15,29 C5.66643187,21.5329929 1,14.766514 1,8.7 Z" stroke={this.props.FGColor} strokeWidth={2} fill={this.props.activeSection === "saved" ? this.props.FGColor : "none"} />
                                    </g>
                                </svg>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">
                                <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <path d="M19.2,19.2 C24.5206551,19.2 28.8509731,23.4401374 28.996235,28.7256933 L29,29 L1,29 C1,23.5876095 5.38760945,19.2 10.8,19.2 L19.2,19.2 Z M15,1 C19.2525926,1 22.7,4.44740743 22.7,8.7 C22.7,12.9525926 19.2525926,16.4 15,16.4 C10.7474074,16.4 7.3,12.9525926 7.3,8.7 C7.3,4.44740743 10.7474074,1 15,1 Z" stroke={this.props.FGColor} strokeWidth={2} fill={this.props.activeSection === "profile" ? this.props.FGColor : "none"} />
                                    </g>
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    export default BottomMenu
