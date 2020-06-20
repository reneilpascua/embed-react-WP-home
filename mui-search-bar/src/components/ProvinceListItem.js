import React, { Component } from 'react';

class ProvinceListItem extends Component {
    render() {

        const {province} = this.props;

        return(
            <div>
                <h5>{province.name}</h5>
                <img src={province.flagImageUrl} alt={province.name}/>
            </div>
        );
    }
}

export default ProvinceListItem;