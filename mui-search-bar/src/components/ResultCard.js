import React, { Component } from 'react';

class ResultCard extends Component {
    render() {
        const {data} = this.props;

        // ecma 5+: checking if a json is empty (ie, looks like this {})
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            console.log('no state found');
            return(
                <div className='result-card'>
                    <h2>No state found with that name.</h2>
                </div>
            );
        } else {
            return(
                <div className='result-card'>
                    <h2><u>{data.name} ({data.abbreviation})</u></h2>
                    <h3>Flag</h3><img className='flag' src={data.flagImageUrl} alt={data.name}/><br/>
                    <div className='uncentered'>
                        <h3>Details</h3>
                        <p><b>Type:</b> {data.type}</p>
                        <p><b>Capital:</b> {data.capital}</p>
                    </div>
                </div>
            );
        }
    }
}

export default ResultCard;