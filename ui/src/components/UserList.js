import React, {Component} from 'react';
import UserRow from "./UserRow";

class UserList extends Component {
    props = {
        users: []
    };

    render() {
        const userRows = this.props.users.map(function (user) {
            return <UserRow user={user}/>
        });

        return (
            <div className="user-list">{userRows}</div>
        )
    }
}

export default UserList;