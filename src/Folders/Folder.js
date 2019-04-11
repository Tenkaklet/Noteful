import React from 'react';
import { Link } from "react-router-dom";
import FOLDERS from '../dummy-store';
import moment from 'moment';
import './Folder.css';

export default function FoldersPage(props) {
    const folder = FOLDERS.folders.find(folder => 
        folder.id === props.match.params.folderId    
    )
    const note = FOLDERS.notes.filter(notes =>      
         notes.folderId == folder.id      
    )
    
    
    const theNotes = note.map(i => {
      return  <li key={i.id}>
                <p><strong>{i.name}</strong></p>
                <p>{moment(i.modified).format('MMMM Do YYYY, hh:mm:ss a')}</p>
             </li>
    });
   
    return(
        <div className="ind-folder-notes">
        <h1>{folder.name}</h1>
        {theNotes}
        <button>Add note</button>
        </div>
        
        
    );
}