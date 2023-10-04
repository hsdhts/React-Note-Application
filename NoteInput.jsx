import React, { useState } from 'react';

function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleAddNote = () => {
    const newNote = {
      id: +new Date(), 
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    onAddNote(newNote);
    setTitle('');
    setBody('');
  };

  return (
    <div className="note-input">
      <input
        type="text"
        placeholder="Judul catatan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="note-input__title"
        maxLength={50} 
      />
      <p className="note-input__title__char-limit">
        {50 - title.length} karakter tersisa
      </p>
      <textarea
        placeholder="Isi catatan"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="note-input__body"
      />
      <button onClick={handleAddNote}>Tambah Catatan</button>
    </div>
  );
}

export default NoteInput;
