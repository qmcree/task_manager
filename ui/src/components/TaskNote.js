import React from 'react';

function TaskNote(props) {
    // TODO: remove user name properties from API and retrieve them using a state store like MobX or Redux.
    return (
        <div className="task-note">
            <p className="note-user">{props.note.user.first_name} {props.note.user.last_name}</p>
            <p className="note">{props.note.note}</p>
        </div>
    )
}

export default TaskNote;