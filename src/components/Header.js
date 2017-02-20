import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        const headerItems = [
            {url: 'sql',body: 'SQL Test'},
            {url: '/', body: 'Home'},
        ];
        const header = headerItems.map((number) =>
            <a href={number.url} key={number.url.toString()}><li>
                {number.body}</li></a>
        );
        return (
            <ul className="Header">{header}</ul>
        );
    }
}
