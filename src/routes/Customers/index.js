import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerListItem from './components/CustomerListItem';

export default class Customers extends React.Component {
	constructor() {
		super();
		this.state = {
			items: []
		};
	}

	componentWillMount() {
		const _this = this;
		const items = [];
		fetch('/api/customers/all', {
			method: 'post'
		}).then((res) => {
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