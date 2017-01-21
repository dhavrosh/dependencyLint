"use strict";

const React = require('react');
const Scroll = require('react-scroll');
const Codemirror = require('react-codemirror');

const Element    = Scroll.Element;

const example = "// write down appropriate greeting for you\nvar greeting = '';\n\nfunction sayHello() {\n\talert(greeting);\n}\n\nsayHello();";

class Summary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {code: example};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // require of codemirror addons should be here
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
            console.log(`Result: ${res}.`);
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
            <Element name="contact" className="element">
                <section id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Try Codemirror</h2>
                                <hr className="star-primary"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Codemirror
                                    className="code-area cm-s-paraiso-light"
                                    value={this.state.code}
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </div>
                            <div className="col-lg-12">
                                <button
                                    className="btn btn-success btn-lg btn-submit pull-right"
                                    onClick={this.handleSubmit}>
                                    Try it
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Element>
        )
    }
}


module.exports = Summary;
