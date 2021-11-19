import { useState } from "react";
import NotesList from './components/NotesList';
import {nanoid} from "nanoid"
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id:nanoid(),
      text: "This is my first note!",
      date: "11/11/2021",
    },
    {
      id:nanoid(),
      text: "This is my second note!",
      date: "11/11/2021",
    },
    {
      id:nanoid(),
      text: "This is my third note!",
      date: "11/11/2021",
    }

  ])

  const [searchText, setSearchText ] = useState("")

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
  }
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id)
  }

  return (
    <div className="container">
      <h1>My Notes App</h1>
      <Search setSearchText={ setSearchText}/>
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        addNote={addNote}
        deleteNote={ deleteNote}/>
    </div>
  );
}

export default App;
