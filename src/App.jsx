import React, { useState } from 'react';
import NotesList from './components/NoteList'; 
import NoteInput from './components/NoteInput';
import SearchBar from './components/SearchBar';
import ArchiveList from './components/ArchiveList';
import { getInitialData, showFormattedDate } from './utils';

function App() {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [archivedNotes, setArchivedNotes] = useState([]);

  //  menambah catatan baru
  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  //  menghapus catatan
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    console.log(`Catatan dengan ID ${id} telah dihapus.`);
  };
  

  //  mencari catatan
  const searchNotes = (term) => {
    setSearchTerm(term);
  };

  //  mengarsipkan catatan
  const archiveNote = (id) => {
    const noteToArchive = notes.find((note) => note.id === id);
    if (noteToArchive) {
      noteToArchive.archived = true;
      setArchivedNotes([...archivedNotes, noteToArchive]);
      deleteNote(id);
    }
  };

  //  mengembalikan catatan dari arsip
  const unarchiveNote = (id) => {
    const noteToUnarchive = archivedNotes.find((note) => note.id === id);
    if (noteToUnarchive) {
      noteToUnarchive.archived = false;
      setNotes([...notes, noteToUnarchive]);
      setArchivedNotes(archivedNotes.filter((note) => note.id !== id));
    }
  };

  // Filter catatan berdasarkan pencarian
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="note-app__header">
        <h1>My Notes App</h1>
        <SearchBar onSearch={searchNotes} />
      </div>
      <div className="note-app__body">
        <NoteInput onAddNote={addNote} />
        <NotesList
          notes={filteredNotes}
          onDeleteNote={deleteNote}
          onArchiveNote={archiveNote}
        />
        <ArchiveList
          archivedNotes={archivedNotes}
          onUnarchiveNote={unarchiveNote}
          onDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
export default App;
