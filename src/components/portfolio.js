"use strict";

const React = require('react');
const Scroll = require('react-scroll');

const Element    = Scroll.Element;

class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Element name="portfolio" className="element">
                <section id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>variations</h2>
                                <hr className="star-primary"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 portfolio-item">
                                <a href="#portfolioModal1"  data-target="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-bomb fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="/dist/img/dependencies/dependency-hardcoded.png" className="img-responsive img-center" alt=""/>
                                    <h1 className="type-text">hardcoded</h1>
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-bomb fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="/dist/img/dependencies/dependency-fabric.png" className="img-responsive img-center" alt=""/>
                                    <h1 className="type-text">fabric</h1>
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-bomb fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="/dist/img/dependencies/dependency-container.png" className="img-responsive img-center" alt=""/>
                                    <h1 className="type-text">container</h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
        )
    }
}

module.exports = Portfolio;
