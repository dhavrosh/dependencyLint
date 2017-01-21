"use strict";

const React = require('react');

class Modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                            <div className="lr">
                                <div className="rl">
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <div className="modal-body">
                                        <h2>dependency container</h2>
                                        <hr className="star-primary"/>
                                            <img src="/dist/img/dependencies/dependency-container.png" className="img-responsive img-centered" alt="" />
                                                <p style={{textAlign:'justify'}}>Dependencies can be injected into objects by many means (such as constructor injection or setter injection). One can even use specialized dependency injection frameworks (e.g Spring) to do that, but they certainly aren't required. You don't need those frameworks to have dependency injection.</p>
                                                <ul className="list-inline item-details">
                                                    <li>
                                                        <strong><a href="https://en.wikipedia.org/wiki/Dependency_injection">Dependency Injection</a>
                                                        </strong>
                                                    </li>
                                                    <li>
                                                        <strong><a href="/">Dependency Lint</a>
                                                        </strong>
                                                    </li>
                                                </ul>
                                                <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Modal;
