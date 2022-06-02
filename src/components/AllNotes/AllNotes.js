import './AllNotes.css';
import Note from '../Note';

const AllNotes = ({ editNote, deleteNote, notes }) => {
  return (
    <div>
        {notes.map((note) => 
            <Note editNote={ editNote } deleteNote={ deleteNote } note={ note } key={note.noteId} />
        )}
    </div>
  );
}

export default AllNotes;
