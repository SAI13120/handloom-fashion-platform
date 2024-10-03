// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import AddToCartButton from './AddToCartButton'; // Import the button

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>{product.availability}</p>

      <AddToCartButton productId={product.id} />
    </div>
  );
};

export default ProductDetail;
