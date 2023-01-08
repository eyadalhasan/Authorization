import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";
import { auth } from "../firebase/firebase-config";

function LoginForm(props) {

    const authorize = useContext(GlobalContext).authorize

    useEffect(()=>{
        return ()=>{
            console.log("login")
        }
        
    },[])

    return (
        <form action="" onClick={(e) => {
            e.preventDefault()

        }}>
            <div className="form">

                <h3>
                    Login
                </h3>

                <label>Your Email</label>
                <br />
                <input type="email" placeholder="" onChange={(e) => {
                    authorize?.chgLoginEmail(e.target.value)
                }} />
                <br />
                <label>Your Password</label>
                <br />
                <input type="password" placeholder="" autoComplete="on" onChange={(e) => {
                    authorize?.chgLoginPass(e.target.value)
                }} />
                <br /><br />
                
                <button onClick={authorize?.signin} className="Login"> Login</button>
                <br />
                <p onClick={() => {
                    props.chgForm()
                }}>Create new account</p>

            </div>
        </form>

    );
}
export default LoginForm