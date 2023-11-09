
import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignform,setisSignform]=useState(true);
  const toggleSignin=()=>{
    setisSignform(!isSignform);


  }
  return (
    <div>
      <Header />
      <div className="absolute bg-no-repeat bg-center bg-cover">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />
      </div>
      {
          !isSignform && (
            <div className="absolute  bg-cover">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />
      </div>
          

        )}

    
        <form className=" w-3/12 p-12  absolute bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-50 overflow-hidden"  action="">
          <h1 className='font-bold text-3xl py-4'>{isSignform ? "Sign In":"Sign Up"}</h1>
          {
          !isSignform && (
          <input type="text" name="text" placeholder='Name' className="p-4 my-4  bg-gray-900 w-full "/>

        )}
        <input type="text" name="text" placeholder='Email Address' className="p-4 my-4  bg-gray-900 w-full "/>
        
        <input type="password" name="" id="" placeholder='password' className="p-4 my-4 w-full bg-gray-900" />
        {
          !isSignform && (
          <input type="password" name="confirm-password" placeholder='Confirm-password' className="p-4 my-4  bg-gray-900 w-full "/>

        )}
        <button className="p-4 my-4 bg-red-600 w-full" type='Submit'>{isSignform ? "Sign In":"Sign Up"}</button>
         <p className="cursor-pointer" onClick={toggleSignin}>
         {isSignform ? "New to Netflix?Sign-up Now":"Already Registered Sign In now"}
         </p>
        </form>
       
     
    </div>
  )
}

export default Login
