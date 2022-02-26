import React, {Component} from "react";
import {BsLinkedin} from "react-icons/all";

export default class HeaderSocials extends Component {
    render() {
        return (

            <div className="header_socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                <a href="https://github.com" target="_blank" rel="noreferrer">github</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">twitter</a>
            </div>
        );
    }
}
