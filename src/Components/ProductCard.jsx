import React, { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({imageUrl, product, handleAddToCart }) {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="ProductCard">
      <img src={imageUrl} alt={product.name}/>
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <div className="quantity-controls">
        <button onClick={decrementQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={() => handleAddToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}
