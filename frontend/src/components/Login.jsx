
function Login() {
  return (
    <>
      <section className="homeScreen login">
        <div className="overlay">
          <form action="" className="form">
            <input type="email" 
            name="email" id="email" 
            placeholder="Enter your Mail id " required/>

            <input type="password"
             name="password"  id="password"
              placeholder="Enter your password" required/>

              
            <button className="submit">LOGIN</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login