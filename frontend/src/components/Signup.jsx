// import React from 'react'
// import { Link } from "react-router-dom"

function Signup() {
  return (
    <>
      <section className="homeScreen login">
        <div className="overlay">
          <form action="" className="form">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="enter you username"
            />

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Mail id "
              required
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />

            <input
              type="password"
              name="password"
              id="password2"
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
