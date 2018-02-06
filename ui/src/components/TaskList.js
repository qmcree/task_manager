import React from 'react';
import Task from "./Task";

function TaskList(props) {
    const acceptedTasks = [];
    const unacceptedTasks = [];

    props.tasks.forEach(function (task, index) {
        if (task.is_accepted) {
            acceptedTasks.push(<Task key={index} task={task}/>);
        } else {
            unacceptedTasks.push(<Task key={index} task={task}/>);
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

export default TaskList;