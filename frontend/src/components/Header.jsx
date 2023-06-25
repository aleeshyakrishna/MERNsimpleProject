import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <header >
        <div className="header" >
            <Link className='links' to="/">HOME</Link>
            <div>
            <Link className='links' to="/login">LOGIN</Link> 
            <Link className='links' to="/signup" >SIGN UP</Link>
            </div>
            
            
        </div>
        
    </header>
    </>
  )
}

export default Header