import React from 'react';
import { Link } from "react-router-dom";
import FOLDERS from '../dummy-store';
import moment from 'moment';
export default function Notes (props) {
    const all_notes = FOLDERS.notes;
    
    return (
        <section className="all-notes">
            <ul>
            {all_notes.map(note =>
                <li key={note.id}>
                    <Link to={`/note/${note.id}`}>
                     <h3>{note.name}</h3>
                    </Link>
                    <p>Modified {moment(note.modified).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    <button>Delete</button>
                </li>    
            )}
        </ul>
        </section>
    );
}