import { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import AlertContext from "../alert/AlertContext";
import { useLocation, useNavigate } from "react-router-dom";

const UserState = (props) => {
    const alertContext = useContext(AlertContext);
    const host = process.env.REACT_APP_API_URL;
    const [user, setUser] = useState(undefined);
    const location = useLocation();
    const history = useNavigate();

    const update = async () => {
        if (!localStorage.getItem("auth-token")) {
            setUser(null);
        }
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                "auth-token": localStorage.getItem("auth-token")
            }
        });
        const json = await response.json();
        if (json !== null && json.name) {
            setUser(json.name);
            if (location.pathname === "/login" || location.pathname === "/signup") {
                history("/");
            }
        } else {
            setUser(null);
            if (location.pathname === "/") history("/signup");
            alertContext.showAlert(JSON.stringify(json), "danger")
        }
    }
    useEffect(() => {
        update();
        // eslint-disable-next-line
    }, [])
    //Get All Notes
    return (
        <UserContext.Provider value={{ user, update }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;
