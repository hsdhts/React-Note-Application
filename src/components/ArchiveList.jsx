import React from 'react';

function ArchiveList({ archivedNotes, onUnarchiveNote, onDeleteNote }) {
  return (
    <div className="archive-list">
      {archivedNotes.map((note) => (
        <div key={note.id} className="archive-item">
          <div className="archive-item__content">
            <h3 className="archive-item__title">{note.title}</h3>
            <p className="archive-item__date">{note.createdAt}</p>
            <p className="archive-item__body">{note.body}</p>
          </div>
          <div className="archive-item__actions">
            <button
              onClick={() => onUnarchiveNote(note.id)} 
              className="archive-item__unarchive-button"
            >
              Kembalikan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArchiveList;
