// import React from "react";
import './index.css'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Destinations from './components/Destinations';
import HomeScreen from "./screens/HomeScreen";
import Signup from "./components/Signup";
import Login from './components/Login';
import Places from './components/Places';
const app = () => {
  return (
    <div>


      <Router>
        <Header />
          
        <Routes>
          
          <Route exact path="/" element={<HomeScreen />} />  

          
        </Routes>    

        <Routes>
          <Route exact path="/login" element={<Login />} />    
        </Routes>

        <Routes>
          <Route exact path="/signup" element={<Signup />} />    
        </Routes> 

        <Places />
        <Footer />
      </Router>
    </div>
  );
};

export default app;
