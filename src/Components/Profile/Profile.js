
import { updatePassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { auth } from "../firebase/firebase-config";

import "./profile.css"
function Profile() {
  
    const [newPass, setNewPass] = useState("");
    function chgPass(e) {
        setNewPass(e.target.value)


    }


    return (
        <React.Fragment>
            <h1 style={{ marginTop: "20px", textAlign: 'center' }} className="profile">Your User Profile</h1>
            <div className="chgpassword">
                <p>New Password</p>
                <form action="">
                <input type="password" name="" id="" onChange={chgPass} />
                <br />
                <br />
                <button onClick={async () => {
                    const user = await updatePassword(auth.currentUser, newPass);;
                    console.log(user)
                }}>Change Password</button>
</form>
            </div>

        </React.Fragment>
    )
}
export default Profile