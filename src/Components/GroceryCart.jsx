import React from 'react';
import CartItem from './CartItem';
import products from '../data/products';

export default function GroceryCart({ handleAddToCart, cartItems, removeProduct, emptyCart, checkout }) {
    return (
        <div className="ProductList">
            {products.map((product) => (
                <CartItem
                    key={product.id} 
                    imageUrl={product.image}  
                    product={product} 
                    handleAddToCart={handleAddToCart} 
                    cartItems={cartItems}
                    removeProduct={removeProduct}
                    emptyCart={emptyCart}
                    checkout={checkout}
                />
            ))}
        </div>
    );
}
