import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        const headerItems = [
            'list item 1',
            'list item 2'
        ];
        const header = headerItems.map((number) =>
            <li key={number.toString()}>
                {number}</li>
        );
        return (
            <ul className="Header">{header}</ul>
        );
    }
}
