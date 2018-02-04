import React, {Component} from 'react';
import TaskNote from "./TaskNote";
import axios from "axios/index";

class Task extends Component {
    state = {
        isNotesExpanded: false,
        isNotesLoaded: false,
        notes: [],
    };
    toggleTaskVisibility = (event) => {
        event.preventDefault();

        // Load the notes if they aren't already.
        if (!this.state.isNotesLoaded) {
            Task.getTaskDetails(this.props.task.id).then((response) => {
                this.setState({
                    notes: response.data.notes,
                    isNotesLoaded: true,
                });
            });
        }

        this.setState({
            isNotesExpanded: !this.state.isNotesExpanded
        });
    };

    static getTaskDetails(taskId) {
        return axios.get('http://localhost:8080/tasks/' + taskId + '/');
    }

    render() {
        const priorityClassName = 'priority-' + this.props.task.priority_level;
        const toggleText = (this.state.isNotesExpanded ? 'hide' : 'show') + ' notes';
        const notes = this.state.notes.map(function (note) {
            return <TaskNote note={note}/>
        });

        return (
            <div className="task">
                <input type="checkbox" checked={this.props.task.is_completed} disabled={true}
                       className="completed-checkbox"/>
                <div className="text">
                    <p className={'title ' + priorityClassName}>{this.props.task.title}</p>
                    <p className="details">{this.props.task.details}</p>
                    <p><a href="#" className="task-notes-toggle" onClick={this.toggleTaskVisibility}>{toggleText}</a>
                    </p>
                    {this.state.isNotesExpanded &&
                    <div className="note-list">
                        {notes}
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default Task;