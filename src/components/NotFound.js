import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='container text-center'>
            Page Does Not Exist<br />
            <Link to="/">Link to Home</Link>
        </div>
    )
}
