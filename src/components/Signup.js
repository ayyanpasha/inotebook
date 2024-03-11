import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AlertContext from '../context/alert/AlertContext';
import UserContext from '../context/user/UserContext';

export default function Signup() {
    const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext);
    const [credential, setCredential] = useState({ name: " ", email: "", password: "", confirmPassword: "" });
    const history = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credential.password !== credential.confirmPassword) {
            alertContext.showAlert("Password doesn't match", "danger")
            return;
        }
        const host = "http://localhost:3001";
        const response = await fetch(`${host}/api/auth/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: credential.name,
                email: credential.email,
                password: credential.password
            })
        });
        const json = await response.json();
        if (json.authToken) {
            //Save the auth token and redirent
            localStorage.setItem('auth-token', json.authToken);
            alertContext.showAlert("Account Created", "success")
            await userContext.update();
            history('/');
        } else {
            alertContext.showAlert("email exists", "danger")
        }
    }
    const onChange = (event) => {
        setCredential({ ...credential, [event.target.name]: event.target.value });
    }
    return (userContext.user === undefined) ?
        (<>Waiting</>)
        : (
            <form onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" id="name" name="name" value={credential.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credential.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credential.password} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={credential.confirmPassword} onChange={onChange} minLength={5} required />
                </div>
                <Link to="/login">Already have account</Link><br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
}
