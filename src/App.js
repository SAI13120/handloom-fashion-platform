import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';
import VirtualTour from './components/VirtualTour';  // Import VirtualTour component

import './styles/theme.css'; 
import './styles/DarkModeToggle.css'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <DarkModeToggle />  
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/virtual-tour" element={<VirtualTour />} />  {/* New route for Virtual Tour */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
