import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {toast} from 'react-toastify'
import Loader from "../../components/Loader";
import { useRegisterMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Addusers = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate= useNavigate()
    const dispatch= useDispatch()

    const [register, {isLoading}] = useRegisterMutation();


    const {userInfo} = useSelector((state)=>state.auth);

   
    
  
    const submitHandler = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
      } else{
        try {
          console.log('submittt');
          const res = await register({name, email, password }).unwrap();
          console.log(res,'this is res');
            dispatch(setCredentials({ ...res }));
            console.log('underdis');
            navigate('/');
        } catch (err) {
          toast.error(err?.data?.message || err.error);
          
        }
      }
      
    };
    return (
      <FormContainer>
        <h1>Add user!</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-2' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group className='my-2' controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
  
          <Form.Group className='my-2' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className='my-2' controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          {isLoading && <Loader />  }
  
          <Button type='submit' variant='primary' className='mt-3'>
            Add
          </Button>
  
          
        </Form>
  
        
      </FormContainer>
    );
  };
  
  export default Addusers;
