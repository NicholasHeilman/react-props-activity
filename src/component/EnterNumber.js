import React, { Component } from 'react';

class EnterNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            incrementNumber: '' ,
        }
    }

    onIncrementNumber = (event)=> {
        this.setState({
            incrementNumber: event.target.value,
        })
    }
    

    addNumber = (event) => {
        this.props.increasaNumber(this.state.incrementNumber)
    }
    
    minusNumber = (event)=>{
        this.props.decreaseNumber(this.state.incrementNumber)
    }
        
    render(){
        
        return(

    <div>
        <button classeName="UpBtn"
                onClick={this.addNumber}>Add </button>
        <input onChange={this.onIncrementNumber} 
               type="text" 
               placeholder="Enter Number" />
        <button classeName="DownBtn"
                onClick={this.minusNumber}>Minus</button>
                {/* {JSON.stringify(this.state.incrementNumber)} */}
    </div>
        )
    }
}// end EnterNumber Component

export default EnterNumber;

