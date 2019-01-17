import React, { Component } from 'react';
import './App.css';
import Header from './component/Header.js'
import EnterNumber from './component/EnterNumber.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0
    }
  }
  increasaNumber= (inputNumber)=>{
    this.setState({
      total: this.state.total += parseInt(inputNumber)
  })
  }

  decreaseNumber= (inputNumber)=>{
    this.setState({
      total: this.state.total - inputNumber
  })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        
        <EnterNumber decreaseNumber = {this.decreaseNumber} 
                     increasaNumber = {this.increasaNumber} />

        {JSON.stringify(this.state)}  
      </div>
    );
  }
}

export default App;