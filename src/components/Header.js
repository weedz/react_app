import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        const headerItems = [
            {url: '/', body: 'Home'},
            {url: 'sql',body: 'SQL Test'},
            {url: 'customers', body: 'Customers'},
        ];
        return (
            <ul className="Header">
                {
                    headerItems.map((i) =>
                        <Link to={i.url} key={i.url.toString()}><li>{i.body}</li></Link>)
                }
            </ul>
        );
    }
}
