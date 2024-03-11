import { useContext, useState } from "react";
import NoteContext from "./NoteContext";
import AlertContext from "../alert/AlertContext";

const NoteState = (props) => {
    const alertContext = useContext(AlertContext);
    const host = "http://localhost:3001"
    const [notes, setnotes] = useState([]);

    //Get All Notes
    const getNotes = async () => {
        //API Call
        const response = await fetch(`${host}/api/note`, {
            method: 'GET',
            headers: {
                "auth-token": localStorage.getItem("auth-token")
            }
        });
        const json = await response.json();
        if (json.errors) {
            alertContext.showAlert(JSON.stringify(json.errors), "danger")
        } else {
            setnotes(json);
        }
    }

    //Add Note
    const addNote = async (title, description, tag) => {
        //TODO; API CALL
        const body = {
            "title": title,
            "description": description,
            "tag": tag
        }
        const response = await fetch(`${host}/api/note`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify(body)
        });
        const json = await response.json();
        if (json.errors) {
            alertContext.showAlert(JSON.stringify(json.errors), "danger")
        } else {
            setnotes(notes.concat(json));
            alertContext.showAlert("Note Added", "success")
        }
    }

    //Delete Note
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/note/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            }
        });
        const json = await response.json();
        if (json.errors) {
            alertContext.showAlert(JSON.stringify(json.errors), "danger")
        } else {
            setnotes(notes.filter((element) => element._id !== id));
            alertContext.showAlert("Note Deleted", "danger")
        }
    }

    //Edit Note
    const editNote = async (id, title, description, tag) => {
        // API CALL
        const body = {
            "title": title,
            "description": description,
            "tag": tag
        }
        const response = await fetch(`${host}/api/note/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify(body)
        });
        const json = await response.json();
        if (json.errors) {
            alertContext.showAlert(JSON.stringify(json.errors), "danger")
        } else {
            for (let note of notes) {
                if (note._id === id) {
                    note.title = title;
                    note.description = description;
                    note.tag = tag;
                    break;
                }
            }
            setnotes(JSON.parse(JSON.stringify(notes)));
            alertContext.showAlert("Note Edited", "success")
        }

    }
    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
