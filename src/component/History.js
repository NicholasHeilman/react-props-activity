import React, { Component } from 'react';

class History extends Component{
    
    render() {
        //convert objects to JSX
       let historyItems = [];
        for( let i = 0; i< this.props.history.length; i+= 1) {
            let item = this.props.history[i];
            let itemRow = (<tr key={i}>
                            <td>{i}</td>
                            <td>{item.value}</td>
                            </tr>);
            historyItems.push(itemRow);
        }
        return (
            <div>
                <h2>History</h2>
                <table>
                    <tbody>
                        {historyItems}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default History;