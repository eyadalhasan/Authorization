import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { GlobalContext } from "../Context/GlobalContext";
import { Navigate } from "react-router-dom";

function SignupForm(props) {
  const authorize = useContext(GlobalContext).authorize
  console.log(authorize)
  useEffect(()=>{
    console.log("signup")
},[])


  return (
    <form action="" onClick={(e) => {
      e.preventDefault()
    }}>
      <div className="form">

        <h3>
          Sign Up
        </h3>

        <label>Your Email</label>
        <br />
        <input type="email" onChange={(e) => {
          authorize?.chgRegEmail(e.target.value)

        }} />
        <br />
        <label>Your Password</label>
        <br />
        <input type="" onChange={(e) => {
          authorize?.chgRegPass(e.target.value)
        }} placeholder="" autoComplete="on" />
        <br /><br />
        <button onClick={authorize?.register}>Create account</button>
        <br />
        <p onClick={() => {
          props.chgForm()
        }}>Login with existing account</p>

      </div>
    </form>



  )
}
export default SignupForm