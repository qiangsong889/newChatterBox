import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      connectToAPI: false,
      greeting: ''
    };
  }
  async componentDidMount() {
    try {
      console.log(
        'inside of componentdidmount function, before doing the post request'
      );
      const response = await axios.post('http://localhost:4000/api');
      console.log('this is the response', response);
      this.setState({
        connectToAPI: true,
        greeting: response.data
      });
    } catch (err) {
      console.log(
        'App Component err occured in componentDidMount lifecycle hook, err ==>',
        err
      );
    }
  }
  render() {
    const { connectToAPI, greeting } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h3>
            {connectToAPI ? (
              <div>Connect to API, Server Says {greeting}</div>
            ) : (
              <div>Waiting For Server To Respond</div>
            )}
          </h3>
        </header>
      </div>
    );
  }
}

export default App;
