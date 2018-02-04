import React, {Component} from 'react';
import axios from 'axios';
import TaskList from "./TaskList";

class UserRow extends Component {
    props = {
        user: {}
    };
    state = {
        areTasksVisible: false,
        areTasksLoaded: false,
        tasks: []
    };
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
                <img src="/avatar.png" className="avatar"/>
                <div className="details">
                    <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                    <p className="address">{this.props.user.address.street} {this.props.user.address.city}, {this.props.user.address.state} {this.props.user.address.postal_code}</p>
                    <p><a href="#" className="task-toggle" onClick={this.toggleTaskVisibility}>{toggleText}</a></p>
                </div>
                {this.state.areTasksVisible &&
                <TaskList tasks={this.state.tasks}/>
                }
            </div>
        );
    }
}

export default UserRow;