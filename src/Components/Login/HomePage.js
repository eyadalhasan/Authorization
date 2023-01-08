import React, { useState } from "react";
import "./login.css"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function HomePage() {
    
    const [__login, setLogin] = useState(true);
    function chgForm(e) {
        setLogin(!__login)
    }

    return (
        <>

            {__login ? <LoginForm chgForm={chgForm} /> : <SignupForm chgForm={chgForm} />}

        </>
    )

}
export default HomePage

