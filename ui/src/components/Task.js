import React, {Component} from 'react';
import TaskNote from "./TaskNote";
import axios from "axios";
import moment from "moment-timezone";

class Task extends Component {
    constructor(props) {
        super(props);

        this.state = {
            areNotesVisible: false,
            areNotesLoaded: false,
            notes: [],
        };
    }

    toggleTaskVisibility = (event) => {
        event.preventDefault();

        // Load the notes if they aren't already.
        if (!this.state.areNotesLoaded) {
            Task.getTaskDetails(this.props.task.id).then((response) => {
                this.setState({
                    notes: response.data.notes,
                    areNotesLoaded: true,
                });
            });
        }

        this.setState({
            areNotesVisible: !this.state.areNotesVisible
        });
    };

    static getTaskDetails(taskId) {
        return axios.get('http://localhost:8080/tasks/' + taskId + '/');
    }

    static formatDate(date) {
        return moment(date).format('MMM D, YYYY');
    }

    render() {
        const task = this.props.task;
        const priorityClassName = 'priority-' + task.priority_level;
        const toggleText = (this.state.areNotesVisible ? 'hide' : 'show') + ' notes';
        const notes = this.state.notes.map(function (note, index) {
            return <TaskNote key={index} note={note}/>
        });
        const createdAt = Task.formatDate(task.created_at);

        return (
            <div className="task">
                <input type="checkbox" checked={task.is_completed} disabled={true}
                       className="completed-checkbox"/>
                <div className="text">
                    <p className={'title ' + priorityClassName}>{task.title}</p>
                    {task.details !== null && task.details.length &&
                    <p className="details">{task.details}</p>
                    }
                    <p className="created-at">Created {createdAt}</p>
                    <button className="task-notes-toggle" onClick={this.toggleTaskVisibility}>{toggleText}</button>
                    {this.state.areNotesVisible &&
                    <div className="note-list">
                        {notes}
                    </div>
                    }
                </div>
            </div>
        );
    }
}

Task.defaultProps = {
    task: {
        "id": 0,
        "assignee_user_id": 0,
        "title": "",
        "details": "",
        "priority_level": 3,
        "priority_label": "Low",
        "is_completed": false,
        "is_accepted": false,
        "created_at": "1900-01-01T00:00:00Z",
        "notes": []
    }
};

export default Task;