import React, { Component } from 'react';
import './App.css';
import { Link, Route } from "react-router-dom";
import FOLDERS from "./dummy-store";
import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import NotePage from './Note/Note';
import FoldersPage from './Folders/Folder';

class App extends Component {
  state = {
    folders: FOLDERS
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>
        <main>
          <Route exact path="/" component={Notes} />
          <Route exact path="/note/:noteId" component={NotePage} />
          <Sidebar folders={this.state.folders} />
          <Route exact path="/folder/:folderId" component={FoldersPage} />
        </main>
      </div>
    );
  }
}

export default App;
