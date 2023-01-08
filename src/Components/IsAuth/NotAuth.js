import React from "react";
import { Navigate, useLocation } from "react-router-dom";
function checkAuth() {
    if (localStorage.getItem('email'))
        return true
    else
        return false
}

function NotAuth(props) {
    const location = useLocation().state;
    console.log(location)
    var isNotAuth = !checkAuth();

    return (

        <React.Fragment>
            {isNotAuth ? props.children : <Navigate to={"welcome"} />}
        </React.Fragment>
    )
}
export default NotAuth