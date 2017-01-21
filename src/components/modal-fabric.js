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
                <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                        <h2>fabric dependency</h2>
                                        <hr className="star-primary"/>
                                            <img src="/dist/img/dependencies/dependency-fabric.png" className="img-responsive img-centered" alt="" />
                                                <p style={{textAlign:'justify'}}>A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. The service is made part of the client's state. Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern.</p>
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
