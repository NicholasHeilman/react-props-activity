import React, { Component } from 'react';

class CurrentTotal extends Component {
    constructor(props){
        super(props);
        this.state = {
            Number: '',
        }
    }
 
    currentTotal = (event) => {
        this.props.total
    }

    render(){
        return(
           <div>
            {currentTotal}

        </div>
        ) 
    }
}

export default CurrentTotal;