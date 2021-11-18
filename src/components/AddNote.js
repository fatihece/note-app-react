import React, {useState} from 'react'

const AddNote = ({addNote}) => {
    const [noteText, setNoteText] = useState("")
    const characterLimit = 200

    const handleChange = (e) => {
        if (characterLimit - e.target.value) {
            
        }
        setNoteText(e.target.value)
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            addNote(noteText)
            setNoteText(" ");
        }
    }
    
    return (
        <div className="note new">
            <textarea
                rows="8"
                cols="10"
                placeholder="Type to add a new note..."
                value= {noteText}
                onChange={handleChange}
            >
               
            </textarea>

            <div className="note-footer">
                <small>{characterLimit - noteText.length }remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
