import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';

export default function NoteItem(props) {
    const { note, updateNote } = props;
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    return (
        <div className="col-lg-3 col-md-4 col-sm-12 my-2">
            <div className="card" style={{ width: "100%" }}>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="fa-regular fa-trash-can mx-2" onClick={() => deleteNote(note._id)} style={{ cursor: "pointer" }}></i>
                        <i className="fa-regular fa-pen-to-square" onClick={() => { updateNote(note) }}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                    <p className="card-subtitle">Tag: {note.tag}</p>
                </div>
            </div>
        </div>
    )
}
