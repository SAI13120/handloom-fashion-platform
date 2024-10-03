// src/components/ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from './AddToCartButton'; // Placeholder for add to cart logic
import '../styles/ProductCatalog.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-stock">{product.availability}</p>

      <Link to={`/product/${product.id}`}>
        <button className="primary-button">View Details</button>
      </Link>

      <AddToCartButton productId={product.id} />
    </div>
  );
};

export default ProductCard;
