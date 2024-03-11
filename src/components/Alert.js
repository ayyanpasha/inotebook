import React, { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

export default function Alert(props) {
    const context = useContext(AlertContext);
    const { alert } = context;
    return (
        <div style={{ height: "130px" }}>
            <div style={{ marginTop: "55px" }} className={`fixed-top alert alert-${alert ? alert.type : ""}`} role="alert">
                {alert ? alert.msg : ""}
            </div>
        </div>
    )
}
