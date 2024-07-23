import React, { useState, useEffect } from 'react';
import NoteForm from './NoteForm';
import Note from './Note';
import './App.css';

const App = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(savedNotes);
    }, []);

    const addNote = (note) => {
        const newNotes = [...notes, note];
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note.id !== id);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <div className="app">
            <h1>Post It Simulator!</h1>
            <NoteForm addNote={addNote} />
            <div className="notes">
                {notes.map((note) => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} />
                ))}
            </div>
        </div>
    );
};

export default App;
