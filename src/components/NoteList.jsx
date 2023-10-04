import React from 'react';

function NotesList({ notes, onDeleteNote, onArchiveNote }) {
  const handleDelete = (id) => {
    onDeleteNote(id);
  };

  const handleArchive = (id) => {
    onArchiveNote(id);
  };

  return (
    <div className="notes-list">
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        notes.map((note) => (
          <div className="note-item" key={note.id}>
            <div className="note-item__content">
              <h3 className="note-item__title">{note.title}</h3>
              <p className="note-item__date">{note.createdAt}</p>
              <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
              <button
                className="note-item__delete-button"
                onClick={() => handleDelete(note.id)}
              >
                Hapus
              </button>
              <button
                className="note-item__archive-button"
                onClick={() => handleArchive(note.id)} 
              >
                Arsipkan
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NotesList;
