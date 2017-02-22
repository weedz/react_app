import React from 'react';

export default class CustomerListItem extends React.Component {
    render() {
        return(
            <div className="CustomerListItem">
                <p>{this.props.customer.firstname}</p>
            </div>
        );
    }
}