import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AdminLayout from './AdminLayout.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
   createBrowserRouter,
    createRoutesFromElements ,Route ,
    RouterProvider 
} from 'react-router-dom' 
// import adminApp from './adminApp.jsx';
import store from '../store.js';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoutes from './components/PrivateRoutes.jsx';
import AllUsersScreen from './admin/adminScreens/allUsersScreen.jsx'
import AddUser from './admin/adminScreens/AddUser.jsx'
//  import AllUsersScreen from './admin/adminScreens/AllUsersScreen.jsx';

// import { AdminHome } from './admin/adminScreens/AdminHome.jsx';
// import { Router } from 'express';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        
        {/* <Route path="/logout" element={<LoginScreen />} /> */}
        
        <Route path="" element={<PrivateRoutes />}>
          <Route path="/profile" element={<ProfileScreen />} />
        </Route>
      </Route>

      <Route path="admin" element={<AdminLayout />}>
       <Route path='login' element={< LoginScreen/>} />
       <Route path='register' element={< RegisterScreen/>} />
        <Route path="all-users" element={<AllUsersScreen />} />
        <Route path="add-users" element={<AddUser />} />

      </Route>
    </>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
  </Provider>
        
)
