import React, { Component } from 'react';

class CurrentTotal extends Component {

    handleSave = () => {
        const itemToAdd ={
            value: this.props.currentTotal,
        };
        this.props.addToHistory(itemToAdd);
    }

    render(){

        return(
            <div>
                <h2>Current Total</h2>
                <h3>{this.props.currentTotal}</h3>
                <button onClick={this.handleSave}>Save</button>
            </div>
        ) 
    }
}

export default CurrentTotal;