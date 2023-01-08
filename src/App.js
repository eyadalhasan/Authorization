import React, { useState } from "react";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PageNotFound from "./Components/Error/PageNotFound";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Components/Login/HomePage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Components/firebase/firebase-config";
import Welcome from "./Components/Welcome/Welcome";
import Profile from "./Components/Profile/Profile";
import Auth from "./Components/IsAuth/Auth";
import NotAuth from "./Components/IsAuth/NotAuth";

function App() {

  

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route element={<Layout />} errorElement={<PageNotFound />}>
        
        <Route element={<NotAuth><HomePage /></NotAuth>} path="/" />
        <Route element={<Auth><Welcome/></Auth>} path="welcome"/>
        <Route  element={<Auth><Profile/></Auth>} path="profile"/>

      </Route>

    )
 

  )
  return <RouterProvider router={router} />
}


export default App;
