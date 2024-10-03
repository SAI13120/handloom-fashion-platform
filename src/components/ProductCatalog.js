// src/components/ProductCatalog.js
import React, { useState } from 'react';
import products from '../components/products'; // This imports your product data
import ProductCard from './ProductCard';
import '../styles/ProductCatalog.css';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-catalog">
      <h1>Shop Handloom Fashion</h1>

      <div className="filter-section">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Sarees">Sarees</option>
          <option value="Scarves">Scarves</option>
          <option value="Bags">Bags</option>
          {/* Add more categories if needed */}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
