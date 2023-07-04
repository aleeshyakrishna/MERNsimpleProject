import { Navbar,Nav, Container, NavDropdown} from "react-bootstrap";
// import {useSelector,useDispatch} from 'react-redux'
// import {useNavigate} from 'react-router-dom'
// import {FaSignInAlt , FaSignOutAlt} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap'
// import { useLogoutMutation } from "../slices/usersApiSlice";
// import {logout} from '../slices/authSlice'

const Adminheader = () => {
  

  

  
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
                
                  <>
                  

                  <LinkContainer to='/admin/all-users'>
              <Navbar.Brand>view All users</Navbar.Brand>
            </LinkContainer>
            <LinkContainer to='/admin/add-users'>
              <Navbar.Brand>Add user</Navbar.Brand>
            </LinkContainer>

            <NavDropdown title='' id="">
                    <LinkContainer to=" ">
                      <NavDropdown.Item>
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                      {/* <NavDropdown.Item  >View all users</NavDropdown.Item>
                      <NavDropdown.Item  >Add user</NavDropdown.Item> */}
                      <NavDropdown.Item  >login/logout</NavDropdown.Item>       
                  </NavDropdown>
                  </>
                 
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  };
  
  export default Adminheader;