import React, { Component } from 'react';
import './App.css';
import Reactor from './reactorTest.js';
import Navi from './Navbar.js';

class App extends Component {
  state = {users: [], value: ''};

  componentDidMount() {
    document.title = "test page";
    this.myColor = "rgb(176, 147, 152)";
    console.log(this);
    fetch('/users')
    .then(res => res.json()) //turns data into json
    .then(users => this.setState({ users }));
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navi/>
        </div>
        <div className="App-intro">
          <h1>Users</h1>
          {this.state.users.map(user =>
            <div key={user.id}>{user.username}</div>
          )}
          <p>Hello</p>
          <input type="text" />
          <button>Submit</button>
        </div>
        <div className="App-part2">
          <Reactor />
        </div>
      </div>
    );
  }
}



export default App;
