import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css'; // Link to the CSS file

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to the Handloom Fashion Platform</h1>
      
      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* You can add featured products here */}
      </section>
      
      <div className="button-container">
        <Link to="/catalog">
          <button className="btn-3d">Explore More</button>
        </Link>
      </div>

      <div className="button-container">
        <Link to="/virtual-tour">
          <button className="btn-3d">Take a Virtual Tour</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
