import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginSignupModal from './LoginSignupModal';

const AddToCartButton = ({ productId }) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const user = localStorage.getItem('user'); // Check if user is logged in
    if (!user) {
      setShowModal(true); // Show login/signup modal if not logged in
    } else {
      // Add to cart logic
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
      navigate('/cart'); // Redirect user to the cart
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <LoginSignupModal showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default AddToCartButton;
