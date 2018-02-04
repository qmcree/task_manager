import React, {Component} from 'react';
import Task from "./Task";

class TaskList extends Component {
    props = {
        tasks: [],
    };

    render() {
        const acceptedTasks = [];
        const unacceptedTasks = [];

        this.props.tasks.forEach(function (task) {
            if (task.is_accepted) {
                acceptedTasks.push(<Task task={task}/>);
            } else {
                unacceptedTasks.push(<Task task={task}/>);
            }
        });

        return (
            <div className="task-list">
                <div className="tasks-accepted">
                    <h6>Accepted</h6>
                    {acceptedTasks}
                </div>
                <div className="tasks-unaccepted">
                    <h6>Unaccepted</h6>
                    {unacceptedTasks}
                </div>
            </div>
        );
    }
}

export default TaskList;