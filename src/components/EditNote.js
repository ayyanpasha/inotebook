import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function EditNote({ currentNote }) {
    const context = useContext(NoteContext);
    const { editNote } = context;
    const [note, setNote] = useState({ title: currentNote.title, description: currentNote.description, tag: currentNote.tag });
    const handleClick = async (event) => {
        event.preventDefault();
        await editNote(currentNote._id, note.title, note.description, note.tag);
    }
    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }
    return (
        <form>
            <div className="my-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title} />
            </div>
            <div className="my-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} />
            </div>
            <div className="my-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag} />
            </div>

            <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Edit Note</button>
        </form>
    )
}
