import React, {Component} from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container header__container">
                    <h5>Hello I'm</h5>
                    <h1>Schenier López</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                    <CTA/>
                    <HeaderSocials/>
                    <div className="me">
                        <img src={"https://via.placeholder.com/150x150"} alt="ME"/>
                    </div>
                    <a href="#contact" className='scroll_down'>Scroll Down</a>
                </div>
            </header>
        );
    }
}
