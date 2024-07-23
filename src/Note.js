import React from 'react';

const Note = ({ note, deleteNote }) => {
  const noteClass = note.important ? 'note important' : 'note';

  return (
    <div className={noteClass} style={{ transform: `rotate(${note.rotation}deg)` }}>
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => deleteNote(note.id)}>Eliminar</button>
    </div>
  );
};

export default Note;
