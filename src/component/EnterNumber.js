import React, { Component } from 'react';

class EnterNumber extends Component {
    constructor(props){
        super(props);
        this.state = {
            Number: '' ,
        }
    }

    onIncrementNumber = (event)=> {
        this.setState({
            Number: event.target.value,
        })
    }
    

    addNumber = (event) => {
        this.props.increasaNumber(this.state.Number)
    }
    
    minusNumber = (event)=>{
        this.props.decreaseNumber(this.state.Number)
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
                {/* {JSON.stringify(this.state.Number)} */}
    </div>
        )
    }
}// end EnterNumber Component

export default EnterNumber;

