import './Note.css';

const Note = ({ editNote, deleteNote, note }) => {
  const { noteId } = note;
  const handleNoteChange = (e) => {
    const newText = e.target.value;
    editNote(noteId, newText);
  }
  const handleDeleteNote = () => {
    deleteNote(noteId);
  }
  return (
    <div>
      <div onClick={handleDeleteNote}>
        Delete({note.noteColor})
      </div>
      <textarea onChange={handleNoteChange}>
        {note.noteText}
      </textarea>
    </div>
  );
}

export default Note;
