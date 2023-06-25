
import { useState } from "react"

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const loginHandler=(e)=>{
    e.preventDefault();
    console.log(email,password);
  }
  return (
    <>
      <section className="homeScreen login">
        <div className="overlay">
          <form onSubmit={loginHandler} action="" className="form">

            
            <input type="email" 
            name="email" id="email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your Mail id " required/>

            <input type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            name="password"  id="password" 
            placeholder="Enter your password" required/>


            <button className="submit"  >LOGIN</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login