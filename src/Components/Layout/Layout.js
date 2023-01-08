import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import Navbar from "../Navbar/Navbar";
import { GlobalContext } from "../Context/GlobalContext";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

function Layout() {
    useEffect(()=>{
console.log("layout")
    },[])
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")
    const [regEmail, setRegEmail] = useState("")
    const [regPass, setRegPass] = useState("")
    const email = localStorage.getItem('email');
    const navigate = useNavigate();
    function chgRegEmail(e) {
        setRegEmail(e)
    }
    function chgRegPass(e) {
        setRegPass(e)
    }
    function chgLoginEmail(e) {

        setLoginEmail(e)
    }
    function chgLoginPass(e) {
        setLoginPass(e)
    }
    const authorize = {
        email,
        chgLoginEmail,
        chgLoginPass,
        chgRegEmail,
        chgRegPass,
        signin: async () => {
            try {
                const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass)
                const email = user?.user?.email;
                localStorage.setItem('email', email);
                navigate("/welcome");
            }
            catch (error) {
                console.log(error.message)
            }
        },
        signout: async () => {
            await signOut(auth);
            localStorage.clear()
            setTimeout(()=>{
                navigate('/')
            },[1000])
            
        },
        register: async () => {
            console.log(1)
            try {
                const user = await createUserWithEmailAndPassword(auth, regEmail, regPass)
                console.log(user)
                const email = user?.user?.email;
                localStorage.setItem('email', email);
                
                
                navigate("/welcome");
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }


    return (
        <GlobalContext.Provider value={{ authorize }}>
            <Navbar />
        
    
            <Outlet></Outlet>
        </GlobalContext.Provider>


    )
}

export default Layout

