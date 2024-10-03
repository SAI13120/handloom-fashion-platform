import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handlePayment = () => {
    // Implement payment logic here
    alert('Proceeding to payment!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Review your items before completing the purchase:</p>
      {cart.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <>
          <ul>
            {cart.map((productId, index) => (
              <li key={index}>Product ID: {productId}</li>
            ))}
          </ul>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
