import React from 'react';

export default class CustomerList extends React.Component {

    render() {
        return (
            <div className="CustomerList">
                {this.props.children}
            </div>
        );
    }
}