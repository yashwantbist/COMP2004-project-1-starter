import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';
import products from '../data/products';


export default function ProductList({ handleAddToCart }){
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductCard key={product.id} imageUrl={product.image}  product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};


