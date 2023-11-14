import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const handleSignout =()=>{
    const auth = getAuth(); 
     signOut(auth).then(() => {
      navigate("/");
   // Sign-out successful.
         }).catch((error) => {
  // An error happened.
});

  }
  return (
    <div className="absolute w-screen  px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
      
      <div className="font-bold text-red-500">
      
       <button onClick={handleSignout}> Sign-out</button>
      </div>
    </div>
    
  )
}

export default Header
