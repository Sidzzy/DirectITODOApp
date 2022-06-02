import React, { useState } from 'react';
//hiteshgu@flock.com
import './App.css';
import AllNotes from './components/AllNotes';
import AddNewNote from './components/AddNewNote';
function App() {
  const [notes, setNotes]  = useState(JSON.parse(localStorage.getItem("Notes")) || []);
  const defaultNote = {
    noteId: '',
    noteColor: '',
    noteText: '',
  };
  const addNewNote = () => {
    setNotes((prevNotes) => {
      let newNote = {...defaultNote};
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      newNote.noteColor = randomColor;
      newNote.noteId = Date.now();
      prevNotes.push(newNote);
      localStorage.setItem("Notes", JSON.stringify([...prevNotes]));
      return [...prevNotes];
    });
  }
  const editNote = (noteId, editedNote) => {
    setNotes((prevNotes) => {
      const newNote = prevNotes.map((note) => {
        if(note.noteId === noteId)
          note.noteText = editedNote;
        return note;
      });
      localStorage.setItem("Notes", JSON.stringify([...newNote]));
      return newNote;
    });
  }
  const deleteNote = (noteId) => {
    setNotes((prevNotes) => {
      const newNotes = prevNotes.filter((note) => note.noteId !== noteId);
      localStorage.setItem("Notes", JSON.stringify([...newNotes]));
      return [...newNotes];
    });
  }
  return (
    <div>
      <AddNewNote addNewNote={ addNewNote } />
      <AllNotes editNote={ editNote } deleteNote={ deleteNote } notes={ notes }/>
    </div>
  );
}

export default App;
