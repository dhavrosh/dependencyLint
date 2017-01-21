"use strict";

const React = require('react');
const Scroll = require('react-scroll');

const Element    = Scroll.Element;

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Element name="intro" className="element">
                <div>
                    <header>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <img className="img-responsive" src="/dist/img/dependency-icon.png" alt="profile"/>
                                        <div className="intro-text">
                                            <span className="name">JS Dependency Lint</span>
                                            <hr className="star-light"/>
                                                <span className="skills">
                                                    with the intention to teach you properly build dependencies
                                                </span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </Element>
        )
    }
}

module.exports = Intro;
