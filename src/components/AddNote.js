import React, { useContext, useState } from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function AddNote({ currentNote }) {
    const context = useContext(NoteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const handleClick = async (event) => {
        event.preventDefault();
        await addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    }
    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value })
    }
    return (
        <>
            <h2>Add Note</h2>
            <form>
                <div className="my-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' onChange={onChange} value={note.title} minLength={3} required />
                </div>
                <div className="my-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required />
                </div>
                <div className="my-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag} />
                </div>

                <button disabled={note.title.length < 3 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </>
    )
}
