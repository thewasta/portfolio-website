import React, {Component} from "react";
import CV from "../../assets/cv/cv.pdf";

export default class CTA extends Component {
    render() {
        return (
            <div className="cta">
                <a className="btn" href={CV}>Download CV</a>
                <a className="btn btn-primary" href="#contact">Let's Talk</a>
            </div>
        );
    }
}
