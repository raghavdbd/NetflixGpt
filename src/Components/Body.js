import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import userSlice, { adduser, removeuser } from '../util/userSlice';

const Body = () => {
  const dispatch=useDispatch();


    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        },
    ])

// we are useing useffect to so that we can store users details in reduxstore
 useEffect(()=>{
      const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user

const{uid,email,displayname}=user;
dispatch(adduser({uid:uid,email:email,displayname:displayname}))

    // ...
  } else {
    dispatch(removeuser)
   
    // User is signed out
    // ...
  }
});


    },[])
  return (
    <div>
      <RouterProvider router={approuter} />
      
    </div>
  )
}

export default Body
