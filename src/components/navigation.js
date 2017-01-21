"use strict";

const React = require('react');
const Scroll = require('react-scroll');

const Link = Scroll.Link;

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navClass: ''
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        const navClass = e.srcElement.body.scrollTop > 100
                            ? 'nav-oblate'
                            : '';

        this.setState({navClass});
    }

    render() {
        return (
            <nav id="mainNav" className={`navbar navbar-default navbar-fixed-top navbar-custom ${this.state.navClass}`}>
                <div className="container">
                    <div className="navbar-header p age-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand link-scroll" to="intro" spy={true} smooth={true} duration={500}>
                            <img className="icon-dependency" src="/dist/img/dependency-small-2-icon.png" />
                            ependency
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="page-scroll">
                                <Link activeClass="active" className="link-scroll" to="portfolio" spy={true} smooth={true} duration={1000}>Variations</Link>
                            </li>
                            <li className="page-scroll">
                                <Link activeClass="active" className="link-scroll" to="about" spy={true} smooth={true} duration={1000}>About</Link>
                            </li>
                            <li className="page-scroll">
                                <Link activeClass="active" className="link-scroll" to="contact" spy={true} smooth={true} duration={1000}>Codemirror</Link>
                            </li>
                            <li className="page-scroll">
                                <Link activeClass="active" className="link-scroll" to="logger" spy={true} smooth={true} duration={1000}>Logger</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

module.exports = Navigation;

