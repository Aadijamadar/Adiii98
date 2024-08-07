// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';
import LoginPage from './Components/LoginPage'; 
import Button from './Components/Button';
import About from './Components/About'; 
import SellerRegistration from './Components/SellerRegistration'; // Import the registration component
import AddProduct from './Components/AddProduct'; // Import the AddProduct component

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/Button' element={<Button />}> </Route>
          <Route path="/about" element={<About />} /> 
          <Route path="/create-account" element={<SellerRegistration />} /> {/* Add the registration route */}
          <Route path="/add-product" element={<AddProduct />} /> {/* Add the AddProduct route */}
        </Routes>
        <Reviews />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
