import React, {Component} from 'react';

class TaskNote extends Component {
    render() {
        // TODO: note user names
        return (
            <div className="task-note">
                <p className="note-user">Joe Blow</p>
                <p className="note">{this.props.note.note}</p>
            </div>
        )
    }
}

export default TaskNote;