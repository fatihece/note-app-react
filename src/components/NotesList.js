import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, addNote, deleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
      <AddNote addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
};

export default NotesList;
