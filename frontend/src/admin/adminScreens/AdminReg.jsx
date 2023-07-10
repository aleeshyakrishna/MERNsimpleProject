import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify'
import Loader from "../../components/Loader";
import { useRegisterMutation } from "../AdminSlices/AdminsApiSlice"
// import { setAdminCredential } from '../AdminSlices/authSlice';
import {setAdminCredentials} from '../AdminSlices/AuthSlice'
import { useNavigate } from 'react-router-dom';

const AdminReg = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [verifypassword,setVerifypassword] = useState('')
   
  const [register, {isLoading}] = useRegisterMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const adminInfo = useSelector((state)=>state.adminauth);

  useEffect(()=>{
    if (adminInfo){
        navigate('/admin/login')
    }else{
      console.log('adminInfo is empty');
    }
},[navigate,adminInfo])


  const submitHandler=async(e)=>{
    e.preventDefault()
    if(password !== verifypassword){
      toast.error('password do not match!')
    }else{
      try {
        console.log('submittt');
        const res = await register({name, email, password }).unwrap();
        console.log(res,'this is res');
          dispatch(setAdminCredentials({ res }));
          console.log('underdis');
          navigate('/admin/login');
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  }

    return (
      <FormContainer>
        <h1>Register</h1>
        <Form onSubmit={submitHandler} >
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              value={name}
              placeholder='Enter name'
              onChange={(e)=>setName(e.target.value)}
              
            ></Form.Control>
          </Form.Group>
  
          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder='Enter email'
             
            ></Form.Control>
          </Form.Group>
  
          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}

              placeholder='Enter password'
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              value={verifypassword}
              onChange={(e)=>setVerifypassword(e.target.value)}

              placeholder='Confirm password'
              
            ></Form.Control>
          </Form.Group>

          {isLoading && <Loader />  }
  
          <Button type='submit' variant='primary' className='mt-3'>
            Register
          </Button>
  
          
        </Form>
  
        <Row className='py-3'>
          <Col>
            Already have an account? <Link to={`admin/login`}>Login</Link>
          </Col>
        </Row>
      </FormContainer>
    );
  };
  
  export default AdminReg;
