import { useState } from "react";
import NotesList from './components/NotesList';

function App() {
  const[notes, setNotes] = useState("")
  return (
    <div className="container">
      <h1>My Notes App</h1>
      <NotesList />
    </div>
  );
}

export default App;
