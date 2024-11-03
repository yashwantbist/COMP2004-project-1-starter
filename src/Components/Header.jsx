import React from 'react';
import './Header.css';
import emptyCartImage from '../assets/cart-empty.png';
import fullCartImage from '../assets/cart-full.png';
import appleImage from '../assets/apple-image.png';

export default function Header({cartItems}) {
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <div className="cart-info">
      <div className="grocery">
        <h2>Hello, username</h2>
        <div className="apple">
        <h1>Groceries App</h1>
        <img 
          src={appleImage} 
          alt="apple" 
          className="apple-image" 
          style={{ height: '25px' }} 
        />

        </div>
      
        <img 
          src={itemCount === 0 ? emptyCartImage : fullCartImage} 
          alt={itemCount === 0 ? "Cart is empty" : "Cart is full"} 
          style={{ height: '50px' }} 
        />
      </div>
    </div>
  );
}
