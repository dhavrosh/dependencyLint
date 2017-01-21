"use strict";

const React = require('react');
const Codemirror = require('react-codemirror');
const xhrClient = require('../xhrClient');
const Modal = require('react-bootstrap').Modal;
const Scroll = require('react-scroll');
const Element    = Scroll.Element;

const example = "/* \n*  You need to inject dependency module 'Logger' into your main.js file. \n*  Fill 'doLogging' function with injecting logger-module with req-obj. \n*/\n\nfunction doLogging() {\n\tvar logger = require('./tasks/logger');\n\treturn logger.recordRequest(req);\n}\n\ndoLogging();";

class TaskHardcoded extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: example,
            resultTitle: '',
            resultText: '',
            resultStyle: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    handleChange(newCode) {
        this.setState({code: newCode, showModal: false});
    }

    handleSubmit() {
        const code = this.state.code;
        this.interpret(code);
    }

    interpret(code) {
        xhrClient.post(`/interpret`, { code })
            .then(response => {
                console.log('res', response);
                this.setState({ resultTitle: 'Success'});
                this.setState({ resultText: response.data});
                this.setState({ resultStyle: {
                    backgroundColor: '#dff0d8',
                    color: '#128f76'
                }});
                this.open();
            })
            .catch(error => {
                this.setState({ resultTitle: 'Error'});
                this.setState({ resultText: error.data});
                this.setState({ resultStyle: {
                    backgroundColor: '#f2dede',
                    color: '#a94442'
                }});
                console.log(error);
                this.open();
            });
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
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
            <Element name="logger" className="element">
                <section style={{padding: '0'}}>
            <div>
                <div>
                    <footer className="text-center">
                        <div className="footer-above">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 text-center">
                                        <h2>require logger for your request</h2>
                                        <hr className="star-light star-light2"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7 text-center">
                                        <p className="module-title">logger.js</p>
                                        <pre>
                                            const db = require('../db');<br/>
                                            const handleRequest = require('./utils').handleRequest;<br/><br/>
                                            module.exports = () => (<br/>
                                            &nbsp;&nbsp;const logger = ();<br/><br/>
                                            &nbsp;&nbsp;logger.recordRequest = req => (<br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;const res = handleRequest(req.method, req.url, req.headers['user-agent']);<br/><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;db.fill('logs', [( type: 'put', key: Date.now().toString(), value: res )]);<br/><br/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;return res;<br/>
                                            &nbsp;&nbsp;);<br/><br/>
                                            &nbsp;&nbsp;return logger;<br/>
                                            );
                                        </pre>
                                    </div>
                                    <div className="col-lg-5 text-center">
                                        <p className="module-title">utils.js</p>
                                        <pre style={{height: '309px'}}>
                                            exports.handleRequest = (method, url, agent) => (<br/>
                                            &nbsp;&nbsp;return `Received request: $(method) $(url) from $(agent)`;<br/>
                                            );
                                        </pre>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <p className="module-title">main.js</p>
                                        <Codemirror
                                            className="code-area cm-s-paraiso-light"
                                            value={this.state.code}
                                            onChange={this.handleChange}
                                            options={options}
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <button
                                            style={{marginBottom: '80px'}}
                                            className="btn btn-success btn-lg btn-submit pull-right"
                                            onClick={this.handleSubmit}>
                                            Try it
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    </div>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton style={this.state.resultStyle}>
                        <Modal.Title>doLogging: {this.state.resultTitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={this.state.resultStyle}>
                        <p style={{overflowX: 'hidden'}}>{this.state.resultText}</p>
                    </Modal.Body>
                    <Modal.Footer style={this.state.resultStyle}>
                        <button className="btn btn-link btn-lg btn-submit pull-right"
                            onClick={this.close} style={this.state.resultStyle}>Close</button>
                    </Modal.Footer>
                </Modal>
            </div>
                </section>
            </Element>
        )
    }
}

module.exports = TaskHardcoded;