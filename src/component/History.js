import React, { Component } from 'react';

class History extends Component{
    
    render() {
        const historyList = [];
        for( let num of this.props.numList) {
            let numberList = (<li>number</li>);
            historyList.push(numberList);
        }
        return (
        <div>
            <h2>History</h2>
            {JSON.stringify(this.props.numList)}
        <ul>
            {historyList}
        </ul>
        </div>    
        )
    }

}

export default History;