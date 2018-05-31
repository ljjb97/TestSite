import React, { Component } from 'react';
import './NavBar.css';
import DropMenu from './DropMenu';

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState(prevState => ({
      toggle: false
    }))
  }

  render() {
    return (
      <div className='Navbar'>
        <div className='NavHead' >
          <img src="./favicon.ico" alt-text="no"></img>
        </div>
        <div className='Nav1' onMouseOver={this.toggler}>
          Nav 1
        </div>
        <DropMenu onMouseOver={this.toggler}/>
        <div className='Nav3'>
          Nav 3
        </div>
        <div className='Nav4'>
          Nav 4
        </div>
      </div>
    );
  }
}

export default Navi;
