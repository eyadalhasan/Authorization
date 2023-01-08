import React from "react";
import { Navigate } from "react-router-dom";
function checkAuth(){
if(localStorage.getItem('email'))
return true
else 
return false
}

function Auth (props){
var isAuth=checkAuth();
    return (
<React.Fragment>
{isAuth?props.children:<Navigate to={"/"}/>}

</React.Fragment>

    )
}
export default Auth