import React from 'react';
import CustomerList from './CustomerList';
import CustomerListItem from './CustomerListItem';

export default class Customers extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
        const _this = this;
        const items = [];
        fetch('/api/customers/all').then((res) => {
            return res.json();
        }).then((json) => {
            json.forEach(function(i) {
                items.push(<CustomerListItem key={i.id} customer={i}/>)
            });
            _this.setState({
                items: items
            });
        });
    }
    render() {
        document.title = 'Customers';
        return(
            <CustomerList>
                {this.state.items}
            </CustomerList>
        );
    }
}