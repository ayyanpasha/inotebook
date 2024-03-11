import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import UserContext from '../context/user/UserContext';

export default function Navbar() {
    const userContext = useContext(UserContext);
    const { user } = userContext;
    let location = useLocation();

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className={`nav-link${(location.pathname === "/") ? " active" : ""}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link${(location.pathname === "/about") ? " active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className='nav-item'>
                        </li>
                    </ul>
                </div>
                <div style={{ color: 'white' }}>
                    {user}
                </div>

                {
                    user === undefined ? (
                        <></>
                    ) : user === null ? (
                        <>
                            <Link to="/login" className='btn btn-primary mx-1'>Login</Link>
                            <Link to="/signup" className='btn btn-primary mx-1'>Signup</Link>
                        </>
                    ) : (
                        <Link
                            to="/signup"
                            className='btn btn-danger mx-1'
                            onClick={() => {
                                localStorage.removeItem("auth-token");
                                userContext.update();
                            }}
                        >
                            Logout
                        </Link>
                    )
                }

            </div>
        </nav>

    )
}
