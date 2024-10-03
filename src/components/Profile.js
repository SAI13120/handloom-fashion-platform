// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/profile.css';

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    shippingAddress: '',
    username: ''
  });
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      const userDetails = JSON.parse(loggedInUser);
      setUser(userDetails);
      setFormData(userDetails); // Prepopulate form with existing data
      // Load orders from localStorage or an API if applicable
      const userOrders = JSON.parse(localStorage.getItem('orders')) || [];
      setOrders(userOrders);
    } else {
      navigate('/login'); // Redirect to login if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Redirect to login after logout
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save updated profile details
    localStorage.setItem('user', JSON.stringify(formData));
    setUser(formData);
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {!editMode ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Phone: {user.phoneNumber}</p>
          <p>Email: {user.email}</p>
          <p>Shipping Address: {user.shippingAddress}</p>
          <p>Username: {user.username}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
          <button onClick={handleLogout}>Logout</button>

          {/* Orders */}
          <h2>Your Orders</h2>
          <ul>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <li key={index}>Order {index + 1}: {order}</li>
              ))
            ) : (
              <p>You have no orders yet.</p>
            )}
          </ul>
        </div>
      ) : (
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label>Shipping Address:</label>
          <input
            type="text"
            name="shippingAddress"
            value={formData.shippingAddress}
            onChange={handleInputChange}
          />
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
