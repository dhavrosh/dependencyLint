"use strict";

const React = require('react');
const Scroll = require('react-scroll');

const Element = Scroll.Element;

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Element name="about" className="element">
                <section className="success" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>About</h2>
                                <hr className="star-light"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <p style={{textAlign:'justify'}}>In software engineering, dependency injection is a software design pattern that implements inversion of control for resolving dependencies.
                                    A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it.
                                    The service is made part of the client's state.
                                    Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern.</p>
                                <p style={{textAlign:'justify'}}>This fundamental requirement means that using values (services) produced within the class from new or static methods is prohibited.
                                    The class should accept values passed in from outside.</p>
                                <p style={{textAlign:'justify'}}>Dependency injection allows a program design to follow the dependency inversion principle.
                                    The client delegates the responsibility of providing its dependencies to external code (the injector).
                                    The client is not allowed to call the injector code.
                                    It is the injecting code that constructs the services and calls the client to inject them.
                                    This means the client code does not need to know about the injecting code.
                                    The client does not need to know how to construct the services. The client does not need to know which actual services it is using.
                                    The client only needs to know about the intrinsic interfaces of the services because these define how the client may use the services.
                                    This separates the responsibilities of use and construction.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
        )
    }
}

module.exports = About;
