import { useState } from "react";
import NotesList from './components/NotesList';
import {nanoid} from "nanoid"

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
  return (
    <div className="container">
      <h1>My Notes App</h1>
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
