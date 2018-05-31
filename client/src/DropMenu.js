import React, { Component } from 'react';
import './NavBar.css';

class DropMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currClass: "dropping-menu",
      toggle: true
    }
  }

  cssToggler() {
    var test = this.state.toggle;
    return test? 'dropping-menu' : 'no-drop';
  }

  render () {
    return (
      <div>
        <div>Title</div>
        <div className={this.cssToggler()}>Option 1</div>
        <div className={this.cssToggler()}>Option 2</div>
        <div className={this.cssToggler()}>Option 3</div>
      </div>
    );
  }
}

export default DropMenu;
