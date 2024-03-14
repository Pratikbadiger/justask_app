import React from 'react'
import "../css/SignUp.css";
import { useState } from 'react';
import Navbar from "./Navbar"

 export const SignUp = () => {
  <div>
  <Navbar/>
</div>

  const [action,setAction] = useState('Sign Up');
  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      
      <div className="inputs">

        {action==="Login"?<div></div>:<div className="input">
          <input type="text" name="" id="" placeholder='Name' />
        </div>}
        
        
        <div className="input">
          <input type="email id" name="" id="" className='demo' placeholder='Email Id' />
        </div>
        
        <div className="input">
          <input type="password" name="" id="" className='demo' placeholder='Password'/>
        </div>
        
      </div>
      {action==="SignUp"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
      

      <div className="submit-conatiner">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("SignUp")}} >SignUp</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
      </div>

  
    
  )
}

export default  SignUp;