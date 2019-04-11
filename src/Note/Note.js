import React from 'react';
import NOTES from '../dummy-store';
import './Note.css';
import moment from "moment";
export default function NotePage(props) {
       
    const note = NOTES.notes.find(n =>
        n.id === props.match.params.noteId   
    )
    
    
    return (
        <div className="ind-note">
            <button onClick={() => props.history.push('/')}>Go Back</button>
            <h2>{note.name}</h2>
            <p>{note.content}</p>
            <p>{moment(note.modified).format('MMMM Do YYY, h:mm:ss a')}</p>
            <button>Delete</button>
        </div>
    );
}