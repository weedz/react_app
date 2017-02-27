import React from 'react';

export default class SQL extends React.Component {

    constructor() {
        super();
        this.state = {
            numChildren: 0,
            items: []
        };
        const stateRef = this;
        const items = [];
        fetch('/api/sql-test', {
            method: 'post'
        }).then(function(res) {
            return res.json();
        }).then(function(json) {
            json.forEach(function(i) {
                items.push(<Child key={i.id} name={i.name} />);
            });
            stateRef.setState({
                items: items
            });
        });
    }

    handleSubmit() {
        const stateRef = this;
        const numChildren = this.state.numChildren;
        fetch('/api/sql-test', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                value: numChildren
            })
        }).then(function(res) {
            return res.json();
        }).then(function(json) {
            let name;
            if (json.length === 1) {
                name = 'button_' + json[0].name;
            } else {
                name = 'not found';
            }
            stateRef.state.items.push(
                <Child key={'button_' + numChildren} name={name}/>
            );
            stateRef.forceUpdate();
        }).catch((err) => {
            console.error('Error: ' + err);
        });
        this.setState({
            numChildren: numChildren + 1
        });
    }

    render() {
        document.title = 'SQL Test';

        return(
            <div className="SQL">
                <Parent addChild={this.handleSubmit.bind(this)}>
                    {this.state.items}
                </Parent>
            </div>
        );
    }
}

class Child extends React.Component {
    render() {
        return (
            <p>{this.props.name}</p>
        );
    }
}

class Parent extends React.Component {
    render() {
        return (
            <div className="ItemList">
                <a href="#" onClick={this.props.addChild}>Button</a>
                {this.props.children}
            </div>
        );
    }
}
module.exports = SQL;