import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";
export default function Sidebar (props) {
      
        
        const folders = props.folders.folders.map(i => {
            return <li key={i.id}>
            <Link to={`/folder/${i.id}`}>
            {i.name}
            </Link>
            </li>;
            
        });
        return (
            <aside className="Sidebar">
                <ul>
                    {folders}
                    <button>Add Folder</button>
                </ul>
            </aside>
        );
}