import React, { useState } from 'react';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
//import GroceryCart from './Components/GroceryCart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    if (quantity > 0) {
      setCartItems((prevItems) => {
        // Check if item already exists in the cart
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          // Update the quantity of the existing item
          return prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        // If it doesn't exist, add new item
        return [...prevItems, { ...product, quantity }];
      });
    }
  };

  const removeProduct = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const checkout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    alert(`Total amount: $${totalAmount.toFixed(2)}`);
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <ProductList />
{/* <GroceryCart handleAddToCart={handleAddToCart} cartItems={cartItems} removeProduct={removeProduct} emptyCart={emptyCart} checkout={checkout} /> */}
</div>
  );
};

export default App;
