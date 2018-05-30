import React, { Component } from 'react';
import './NavBar.css';

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState(prevState => ({
      mouseOver: !(this.state.mouseOver)
    }))
  }

  render() {
    return (
      <div className='Navbar'>
        <div className='NavHead' >
          <img src="./favicon.ico" alt-text="no"></img>
        </div>
        <div className='Nav1' onMouseOver={this.handleOver}>
          Nav 1
        </div>
        <div className='Nav2'>
          Nav 2
        </div>
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
