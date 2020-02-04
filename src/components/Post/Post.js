import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        const { auth, profile} = this.props;

        return (
            <article>
                <div className="top">
                    <div className="creator">
                        <div className="image">
                            <img></img>
                        </div>
                        <div className="username">
                            Username
                        </div>
                    </div>
                    <div className="options">
                        <button>
                            <div style={{backgroundColor: this.props.FGColor}} />
                            <div style={{backgroundColor: this.props.FGColor}} />
                            <div style={{backgroundColor: this.props.FGColor}} />
                        </button>
                    </div>
                </div>
                <div className="chain">
                    <Slider {...settings}>
                        <div>
                            <div className="item" id="a"></div>
                        </div>
                        <div>
                            <div className="item" id="b"></div>
                        </div>
                        <div>
                            <div className="item" id="c"></div>
                        </div>
                        <div>
                            <div className="item" id="d"></div>
                        </div>
                        <div>
                            <div className="item" id="e"></div>
                        </div>
                    </Slider>
                </div>
                {/* <ul className="chain">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                <div className="interactions">
                    <ul>
                        <li>
                            <button style={{backgroundColor: this.props.BGColor}}>
                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinejoin="round">
                                    <path d="M10,19 C3.99966384,14.1995126 1,9.84978149 1,5.95 C1,3.21619049 3.21619049,1 5.95,1 C7.62473083,1 9.10521045,1.83168835 10.0009451,3.10457127 C10.8947896,1.83168835 12.3752692,1 14.05,1 C16.7838095,1 19,3.21619049 19,5.95 C19,9.85 16,14.2 10,19 L10,18.999 L10,19 L10,19 Z" stroke={this.props.FGColor} strokeWidth="1" />
                                    </g>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button style={{backgroundColor: this.props.BGColor}}>
                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <path d="M9.95868346,18.9443533 C11.6101696,18.9443533 13.1572836,18.4968099 14.4857045,17.7162164 C15.0092811,17.4085576 18.4687342,19.3484756 18.9173669,18.9443533 C19.4762651,18.4409052 17.0017279,15.5687289 17.4199199,14.9400046 C18.3659896,13.5176509 18.9173669,11.8094013 18.9173669,9.97217663 C18.9173669,5.01698031 14.9064277,1 9.95868346,1 C5.01093921,1 1,5.01698031 1,9.97217663 C1,14.927373 5.01093921,18.9443533 9.95868346,18.9443533 Z" stroke={this.props.FGColor} strokeWidth="1" />
                                    </g>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button style={{backgroundColor: this.props.BGColor}}>
                                <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd" strokeLinejoin="round">
                                    <g transform="translate(1.000000, 1.000000)" stroke={this.props.FGColor} strokeWidth="1">
                                        <polygon points="0 -1.17972531e-13 6.73108969 6.86259473 18 -1.13686838e-13" />
                                        <polygon points="9.13749812 18 6.73108969 6.86259473 18 0" />
                                    </g>
                                    </g>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="comments">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div className="add">
                        <input type="text" placeholder="Add a comment..." style={{backgroundColor: this.props.BGColor}}></input>
                        <button style={{backgroundColor: this.props.BGColor, color: this.props.FGColor}}>Post</button>
                    </div>
                </div>
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Post);
