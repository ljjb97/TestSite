import React, { Component } from 'react';
import './App.css';

class Reactor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      cssClass: "App",
      navSwitch: "Collapse-Nav"
    };
    this.handleOver = this.handleOver.bind(this);
    this.handleLeave =this.handleLeave.bind(this);
  }

  handleOver() {
    this.setState(prevState => ({
      cssClass: "App-header",
      navSwitch: "Collapse-Nav-Over"
    }))
  }

  handleLeave() {
    this.setState(prevState => ({
      cssClass: "App",
      navSwitch: "Collapse-Nav"
    }))
  }

  render() {
    return(
      <div className={this.state.cssClass} onMouseOver={this.handleOver} onMouseLeave={this.handleLeave}>
        <p>Hello world this is a diffrent Component</p>
        <button className={this.state.navSwitch}>Button 1</button>
      </div>
    );
  }
}

export default Reactor;
