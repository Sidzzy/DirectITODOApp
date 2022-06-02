import './AddNewNote.css';

const AddNewNote = ({ addNewNote }) => {
  const handleNewNoteClick = (e) => {
    e.preventDefault();
    addNewNote();
    console.log("handleNewNoteClick called");
  }
  return (
    <div>
      <button onClick={handleNewNoteClick}>
        New Note
      </button>
    </div>
  );
}

export default AddNewNote;
