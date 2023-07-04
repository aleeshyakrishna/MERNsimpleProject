// import React from "react";
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './index.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// import HomeScreen from './screens/HomeScreen';
const app = () => {
  return (
    <div>
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container> 
    </div>
  );
};

export default app;
