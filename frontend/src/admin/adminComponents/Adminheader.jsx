import { Navbar,Nav, Container, NavDropdown} from "react-bootstrap";
import {useSelector,useDispatch,} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {FaSignInAlt , FaSignOutAlt} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'
import { useLogoutMutation } from "../AdminSlices/AdminsApiSlice";
// import { useLoginMutation } from "../AdminSlices/AdminsApiSlice";
import { adminlogout } from "../AdminSlices/AuthSlice";
import { useState } from "react";
const Adminheader = () => {

  const adminInfo = useSelector((state)=>state.adminAuth)
  const credentials=adminInfo.admin
  console.log(adminInfo.admin,"ttttttttttttttttttttttt");
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const [adminlogoutApiCall] = useLogoutMutation()
  const logoutHandler= async()=>{
    try {
      await adminlogoutApiCall().unwrap();
     
      dispatch(adminlogout());
      console.log("under dispatch");
    //  const setAdminData({admin:false})
    
      navigate('/admin')
    } catch (err) {
        console.log(err);
      
    }
  }
  
  
    return (
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/admin'>
              <Navbar.Brand>Admin</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                {credentials!==null ? (
                  
                  <>
                    <LinkContainer to='/admin/register'>
                    <Navbar.Brand className="text-white"></Navbar.Brand>
                     </LinkContainer>
                    <LinkContainer to='/admin/all-users'>
                 <Navbar.Brand className="text-white"></Navbar.Brand>
                 </LinkContainer>
                  <NavDropdown title={adminInfo.name} id="adminname">
                  

                      <NavDropdown.Item onClick={logoutHandler} >Logoutttt</NavDropdown.Item>
                  </NavDropdown>

                  </>
                 ): (
                  <>
                  <LinkContainer to='/admin/login'>
                <Nav.Link>
                    <FaSignInAlt />
                </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/admin/register">
                <Nav.Link >
                    <FaSignOutAlt />
                </Nav.Link>
                </LinkContainer>
                  </>
                )}
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
    
  };
  

  
  export default Adminheader;