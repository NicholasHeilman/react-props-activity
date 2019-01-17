import React, { Component } from 'react';
import './App.css';
import Header from './component/Header.js';
import EnterNumber from './component/EnterNumber.js';
import CurrentTotal from './component/CurrentTotal.js';
// import History from './component/History.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: 0
    }
  }

  increasaNumber= (inputNumber)=>{
    console.log('IN Add to Number', inputNumber);
    this.setState({
      total: this.state.total + inputNumber
  })
  }

  decreaseNumber= (inputNumber)=>{
    console.log('IN Minus number', inputNumber);
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
          {/* <p>Current Total: {(this.state)}</p> */}
        {JSON.stringify(this.state)}  
        <hr />
        <CurrentTotal currentTotal={this.state.total}/>
        {/* <History /> */}
      </div>
    );
  }
}

export default App;