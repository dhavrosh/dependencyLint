"use strict";

const React = require('react');

class ModalHardcoded extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                        <h2>hardcoded dependency</h2>
                                        <hr className="star-primary"/>
                                            <img src="/dist/img/dependencies/dependency-hardcoded.png" className="img-responsive img-centered" alt="" />
                                                <p style={{textAlign:'justify'}}>Dependency injection is basically providing the objects that an object needs (its dependencies) instead of having it construct them itself. It's a very useful technique for testing, since it allows dependencies to be mocked or stubbed out.
                                                </p>
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

module.exports = ModalHardcoded;
