
import React, { useRef, useState } from 'react'
import Header from './Header'
import {isValidate} from '../util/validate'
import {auth} from '../util/firebase'
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



//  lOGIN CONTROLLER
const Login = () => {
  //  THIS USE STAATE HOOKE FOR GETTING ERROR MESSSAGE WHILE FILLING EMAIL AND PASSWORD
  const [message,setmessage]=useState(null);
  //  THIS USESTATE IS FOR KNOWING  WHETHER USER IS SIGN IN OFR SIGNUP
  const[isSignform,setisSignform]=useState(true);
  //  useRef is used for getting input details from email box and password box
  const email=useRef();
  const password=useRef();


  //  is validate function will check email and password are valid or not
  const  isvalidateform=()=>{
    // console.log(email.current.value)
    // console.log(password.current.value)
 const message1=   isValidate(email.current.value,password.current.value);
 setmessage(message1)
 console.log(message1)
 if(message1) return ;
 if(!isSignform){
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setmessage(errorMessage)
  
      // ..
    });

 }else{
  const auth = getAuth();
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(errorMessage)

  });

 }



 

  }
  const toggleSignin=()=>{
    setisSignform(!isSignform);
}
  return (
    <div>
      <Header />
      <div className="absolute h-screen">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />
      </div>
      {
          !isSignform && (
            <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background-img" />
      </div>
          

        )}

    
        <form onSubmit={(e)=> e.preventDefault()

        } className=" w-3/12 p-12  absolute bg-black  my-36 mx-auto right-0 left-0 text-white bg-opacity-50 overflow-hidden"  action="">
          <h1 className='font-bold text-3xl py-4'>{isSignform ? "Sign In":"Sign Up"}</h1>
          {
          !isSignform && (
          <input type="text" name="text" placeholder='Name' className="p-4 my-4  bg-gray-900 w-full "/>

        )}
        <input type="text" ref={email} name="text" placeholder='Email Address' className="p-4 my-4  bg-gray-900 w-full "/>
       
        
        <input type="password" ref={password} name="" id="" placeholder='password' className="p-4 my-4 w-full bg-gray-900" />
        <p className="text-red">{message===null?"":message}</p>
        
        <button className="p-4 my-4 bg-red-600 w-full" type='Submit' onClick={()=>{
          isvalidateform()
        }}>{isSignform ? "Sign In":"Sign Up"}</button>
         <p className="cursor-pointer" onClick={toggleSignin}>
         {isSignform ? "New to Netflix?Sign-up Now":"Already Registered Sign In now"}
         </p>
        </form>
       
     
    </div>
  )
}

export default Login
