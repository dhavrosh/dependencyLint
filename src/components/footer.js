"use strict";

const React = require('react');

class Footer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <footer className="text-center">
                    <div className="footer-above" style={{backgroundColor: '#233140'}}>
                        <div className="container">
                            <div className="row">
                                <div className="footer-col col-md-4">
                                    <h3>Location</h3>
                                    <p>Naukova 7-A | Lviv</p>
                                </div>
                                <div className="footer-col col-md-4">
                                    <h3>Around the Web</h3>
                                    <ul className="list-inline">
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-google-plus"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-linkedin"></i></a>
                                        </li>
                                        <li>
                                            <a href="#" className="btn-social btn-outline"><i className="fa fa-fw fa-dribbble"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-col col-md-4">
                                    <h3>About Lint</h3>
                                    <p>Dependency Lint is a free to use and simple service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md">
                    <a className="btn btn-primary" href="#page-top">
                        <i className="fa fa-chevron-up"></i>
                    </a>
                </div>
            </div>
        )
    }
}

module.exports = Footer;
