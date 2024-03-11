import React, { useContext, useEffect, useRef, useState } from 'react'

import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import EditNote from './EditNote';
import UserContext from '../context/user/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Note() {
    const context = useContext(NoteContext);
    const userContext = useContext(UserContext);
    const { notes, getNotes } = context;
    const [editNote, setEditNote] = useState({ _id: "NONE", title: "", description: "", tag: "" });
    const [showPage, setshowPage] = useState(true);
    const history = useNavigate();
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);
    const ref = useRef(null);
    const updateNote = (note) => {
        setEditNote(note);
        ref.current.click();
    }
    useEffect(() => {
        async function helper() {
            await userContext.update();
            if (userContext.user === null && userContext.user !== undefined) {
                history("/signup");
            }
        }
        console.log(1);
        helper();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        console.log(2);
        if (userContext.user === undefined) {

        } else if (userContext.user === null) {
            history("/signup");
        } else {
            setshowPage(false);
        }
        // eslint-disable-next-line
    }, [userContext.user]);
    return (showPage) ?
        (<>Waiting</>)
        : (
            <>
                <AddNote />

                <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <EditNote key={editNote._id} currentNote={editNote} />
                            </div>
                            <div className="modal-footer">
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row my-3'>
                    <h2>Your Notes</h2>
                    {(notes.length === 0) ? <div className='container' style={{ height: "100%" }}>No Notes</div> : notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                    })}
                </div>
            </>
        )
}
