import React from 'react';

export default class SQL extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9000/api/sql-test', {
            method: 'post',
            body: 'a=1'
        }).then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
        });
    }

    render() {
        return(
            <div className="SQL">
                <button onClick={this.handleSubmit}>Button</button>
            </div>
        );
    }
}