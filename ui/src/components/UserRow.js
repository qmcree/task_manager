import React, {Component} from 'react';
import axios from 'axios';
import TaskList from "./TaskList";

class UserRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            areTasksVisible: false,
            areTasksLoaded: false,
            tasks: []
        };
    }

    toggleTaskVisibility = (event) => {
        event.preventDefault();

        // Load the tasks if they aren't already.
        if (!this.state.areTasksLoaded) {
            UserRow.getUserTasks(this.props.user.id).then((response) => {
                this.setState({
                    tasks: response.data.tasks,
                    areTasksLoaded: true,
                });
            });
        }

        this.setState({
            areTasksVisible: !this.state.areTasksVisible
        });
    };

    static getUserTasks(userId) {
        return axios.get('http://localhost:8080/users/' + userId + '/tasks/');
    }

    render() {
        const toggleText = (this.state.areTasksVisible ? 'hide' : 'show') + ' tasks';

        return (
            <div className="user">
                <img src="/avatar.png" className="avatar" alt="User avatar"/>
                <div className="details">
                    <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                    <p className="address">{this.props.user.address.street} {this.props.user.address.city}, {this.props.user.address.state} {this.props.user.address.postal_code}</p>
                    <p>
                        <button className="task-toggle" onClick={this.toggleTaskVisibility}>{toggleText}</button>
                    </p>
                </div>
                {this.state.areTasksVisible &&
                <TaskList tasks={this.state.tasks}/>
                }
            </div>
        );
    }
}

UserRow.defaultProps = {
    user: {
        "id": 0,
        "username": "username",
        "first_name": "first name",
        "last_name": "last name",
        "email": "email@no.none",
        "address": {
            "street": "123 Elm St",
            "city": "Dallas",
            "state": "TX",
            "postal_code": "75379"
        }
    }
};

export default UserRow;