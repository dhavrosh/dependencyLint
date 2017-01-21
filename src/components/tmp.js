"use strict";

const React = require('react');
const Link = require('react-router').Link;
const xhrClient = require('../xhrClient');
const Codemirror = require('react-codemirror');
const { Button, Grid, Row, Col, Jumbotron, Navbar, Nav, NavItem } = require('react-bootstrap');
const Scrollspy = require('react-scrollspy').Scrollspy;

class AuthorsIndex extends React.Component {
    static loadProps(context, cb) {
        xhrClient.get('examples')
            .then(response => {
                const example = response.data;
                cb(null, {example});
            })
            .catch(error => cb(error));
    }

    constructor(props) {
        super(props);
        this.state = {code: this.props.example};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(newCode) {
        this.setState({code: newCode});
    }

    handleSubmit() {
        const code = this.state.code;
        this.interpret(code);
    }

    interpret(code) {
        try {
            const res = eval(code);
            console.log(res);
            alert(`Result: ${res}.`);
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const options = {
            mode: 'javascript',
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            gutters: ["CodeMirror-lint-markers"],
            lint: true
        };

        require('codemirror/mode/javascript/javascript');
        require('codemirror/addon/selection/active-line');
        require('codemirror/addon/edit/matchbrackets');
        require('codemirror/addon/lint/lint');
        require('codemirror/addon/lint/javascript-lint');

        return (
            <Grid>
                <Navbar inverse={true} collapseOnSelect fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">JS Dependency</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } className="scroll-spy" componentTag="div">
                                <NavItem eventKey={1} href="#section-1">Link</NavItem>
                                <NavItem eventKey={2} href="#section-2">Link</NavItem>
                            </Scrollspy>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Row className="show-grid">
                    <Col lg={12}>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <h1 className="page-title">JS Dependency Injection</h1>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <p> <small>
                                    In software engineering, dependency injection is a software design pattern that implements inversion of control for resolving dependencies. A dependency is an object that can be used (a service). An injection is the passing of a dependency to a dependent object (a client) that would use it. The service is made part of the client's state. Passing the service to the client, rather than allowing a client to build or find the service, is the fundamental requirement of the pattern.
                                </small></p>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <pre>
                                    var service = "123";
                                </pre>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <Codemirror
                                    className="code-area cm-s-paraiso-light"
                                    value={this.state.code}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <Button
                                    className="btn-submit"
                                    bsStyle="success"
                                    onClick={this.handleSubmit}>
                                    Try
                                </Button>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col lg={12}>
                                <div>
                                    <div>
                                        <section id="section-1">section 1</section>
                                        <section id="section-2">section 2</section>
                                        <section id="section-3">section 3</section>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

module.exports = AuthorsIndex;
