import React from 'react';
import UserRow from "./UserRow";

function UserList(props) {
    const userRows = props.users.map(function (user, index) {
        return <UserRow key={index} user={user}/>
    });

    return (
        <div className="user-list">{userRows}</div>
    )
}

export default UserList;