import React, { Component } from 'react';
import './reactorTest.css';

class Reactor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      cssClass: "App-head",
      navSwitch: "Collapse-Nav"
    };
    this.testToggle = this.testToggle.bind(this);
    this.testOffToggle = this.testOffToggle.bind(this);
  }

  testToggle() {
    this.setState(prevState => ({
      toggle: true
    }))
  }

  testOffToggle() {
    this.setState(prevState => ({
      toggle: false
    }))
  }

  render() {
    return(
      <div className={this.state.toggle? "App-head-over" : "App-head"} onMouseOver={this.testToggle } onMouseLeave={this.testOffToggle}>
        <p>Hello world this is a diffrent Component</p>
        <button className={this.state.toggle? "Collapse-Nav-Over" : "Collapse-Nav"}>Button</button>
      </div>
    );
  }
}

export default Reactor;
