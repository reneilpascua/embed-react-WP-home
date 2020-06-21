import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ResultCard from '../components/ResultCard.js';

class ProvincesAndStates extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchterm:'',
            matchedState:{},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({searchterm: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const {data : us_states} = this.props;
        console.log('searching for: ' + this.state.searchterm);

        var match = {};
        us_states.forEach((us_state) => {
            if (this.state.searchterm.toLowerCase() === us_state.name.toLowerCase()) {
                match=us_state;
            }
        });

        this.setState(
            { matchedState:match }
        , function(){this.printResult()});
    }

    componentDidMount() {
        // console.log(this.props.data);
    }

    printResult() {
        ReactDOM.render(
            <ResultCard data={this.state.matchedState}/>,
            document.getElementById('result-container')
        );
    }

    render() {

        return(
            <div>
                <h1>Canadian Provinces and American States:</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:<br/>
                        <input type="text" placeholder="Exact Name" value={this.state.searchterm} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                    <button>Table</button>
                </form>

                <div id="result-container"></div>
            </div>
        );
    }

}

export default ProvincesAndStates;