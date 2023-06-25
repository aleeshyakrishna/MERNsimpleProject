// import React from 'react'
// import { Link } from "react-router-dom"
import { useState } from "react";

function Signup() {
  const [username,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [verifypassword,setVerifyPassword]=useState('')

  const signupHandler=(e)=>{
    e.preventDefault();
    console.log(username,email,password,verifypassword);
  }

  return (
    
    <>
      <section className="homeScreen login">
        <div className="overlay">
          <form onSubmit={signupHandler} action="" className="form">
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e)=>setUserName(e.target.value)}
              placeholder="enter you username"
            />

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your Mail id "
              required
            />

            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <input
              type="password"
              name="password"
              id="password2"
              value={verifypassword}
              onChange={(e)=>setVerifyPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />

            <button className="submit">SIGN UP</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Signup;
