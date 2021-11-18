import React, {useState} from 'react'

const AddNote = ({addNote}) => {
    const [noteText, setNoteText] = useState("")
    const handleChange = (e) => {
        setNoteText(e.target.value)
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            addNote(noteText)
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
                <small>200 remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote
