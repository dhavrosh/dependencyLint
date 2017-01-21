"use strict";

const React = require('react');
const Navigation = require('./navigation');
const Intro = require('./intro');
const Portfolio = require('./portfolio');
const About = require('./about');
const Summary = require('./summary');
const Footer = require('./footer');
const ModalHardcoded = require('./modal-hardcoded');
const ModalFabric= require('./modal-fabric');
const ModalContainer = require('./modal-container');
const TaskHardcoded = require('./task-hardcoded');

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <div>
            <Navigation/>
            <Intro/>
            <Portfolio/>
            <About/>
            <Summary/>
            <TaskHardcoded/>
            <Footer/>
            <ModalHardcoded/>
            <ModalFabric/>
            <ModalContainer/>
        </div>
    )
  }
}

module.exports = Index;
