import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AlertContext from '../context/alert/AlertContext';
import UserContext from '../context/user/UserContext';

export default function Login() {
    const alertContext = useContext(AlertContext);
    const userContext = useContext(UserContext);
    const [credential, setCredential] = useState({ email: "", password: "" });
    const history = useNavigate();
    const handleSubmit = async (event) => {
        const host = "http://localhost:3001";
        event.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credential)
        });
        const json = await response.json();
        if (json.authToken) {
            //Save the auth token and redirent
            localStorage.setItem('auth-token', json.authToken);
            alertContext.showAlert("Login Success", "success");
            await userContext.update();
            history('/');
        } else {
            alertContext.showAlert("Invalid Credentials", "danger")
        }
    }
    const onChange = (event) => {
        setCredential({ ...credential, [event.target.name]: event.target.value });
    }
    return (userContext.user === undefined) ?
        (<>Waiting</>)
        : (
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credential.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credential.password} onChange={onChange} minLength={5} required />
                </div>
                <Link to="/signup">Create New Account</Link><br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
}
