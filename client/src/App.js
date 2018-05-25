import React, { Component } from 'react';
import './App.css';
import Reactor from './reactorTest.js';

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
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
        <p>Hello</p>
        <input type="text" />
        <button>Submit</button>
        <Reactor />
      </div>
    );
  }
}



export default App;