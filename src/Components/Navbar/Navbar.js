import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import "./navbar.css"
import { Link, useLocation, useSearchParams } from "react-router-dom";

const navStruct=[{name:'/profile',isActive:false},{name:"/welcome",isActive:true}]


function Navbar() {
const location=useLocation()
const [_navStruct,setNavStruct]=useState(navStruct)
useEffect(()=>{
console.log(location.pathname)
   const navStructState=navStruct.map((item,idx)=>{
if(location.pathname==item.name){
    item.isActive=true;
}
else 
item.isActive=false;
return item

})
console.log(navStructState)
setNavStruct(navStructState);

},[location])



    const authorize = useContext(GlobalContext).authorize;





    return (
        <div className="Navbar">
            <div>
                <h1>ReactAuth</h1>
            </div>
            {!localStorage.getItem('email') ? <div>
                <div><Link to='/' ><li>Login</li></Link></div>

            </div> :
            <div>
          
              <Link to='profile' state={"profile"} ><li  ><button className={`btn ${!_navStruct[0].isActive?"":"active"} `} >Profile</button></li></Link>
              
            <li onClick={()=>{
                authorize.signout()
            }}>
        


        <button className={`btn ${!_navStruct[1].isActive?"":"active"} `} >Logout</button>
                </li>
                
           
                </div>
                
            
            
          }

        </div>

    )
}
export default Navbar