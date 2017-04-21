import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Adam extends Component {
	
	render(){
		return(
		
		<div>Adam Rusnak</div>
		
		);
	}
	
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		
		<Adam> </Adam>
		
      </div>
    );
  }
}

export default App;
