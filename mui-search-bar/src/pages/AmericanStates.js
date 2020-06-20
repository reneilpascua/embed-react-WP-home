import React, { Component } from 'react';

class AmericanStates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sometext="some text"
        };
    }
    
    render() {
        console.log()

        return(
            <div>
                <p>hello world, here's some text: {sometext}</p>
            </div>
        );
    }

}

export default AmericanStates;