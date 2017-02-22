import React from 'react';

export default class CustomerListItem extends React.Component {
    handleClick(e) {
        e.preventDefault();
        alert(this.props.customer.id + ": " + this.props.customer.firstname + " " + this.props.customer.lastname);
    }
    render() {
        return(
            <div className="CustomerListItem">
                <p onClick={this.handleClick.bind(this)}>{this.props.customer.firstname}</p>
            </div>
        );
    }
}