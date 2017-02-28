import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { fetchUsers , addUser} from '../../../actions/SQLActions';

class SQL extends React.Component {

    componentWillMount() {
        this.props.fetchUsers();
    }

    renderList() {
        return this.props.items.map(user => (
            <Child key={user.id} name={user.name}/>
        ))
    }

    render() {
        document.title = 'SQL Test';

        return(
            <div className="SQL">
                <Parent addChild={this.props.addUser.bind(this, this.props.numChildren+1)}>
                    {this.renderList()}
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

function mapStateToProps(state) {
    return {
        items: state.SQL.users,
        numChildren: state.SQL.numChildren
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchUsers,addUser
        },
        dispatch
    );
}


//module.exports = SQL;
const defaultExport = connect(mapStateToProps, matchDispatchToProps)(SQL)
export default defaultExport;
module.exports = defaultExport;