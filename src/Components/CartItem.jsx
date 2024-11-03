import React, { useState } from 'react';

export default function CartItem({ imageUrl, product, handleAddToCart, cartItems, removeProduct, emptyCart, checkout }) {
    const existingItem = cartItems.find(item => item.id === product.id);
    const quantity = existingItem ? existingItem.quantity : 0;

    const totalPrice = quantity * product.price;

    const incrementQuantity = () => {
        handleAddToCart(product, 1); // Add 1 item to cart
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            removeProduct(product.id); // Remove the product
        }
    };

    return (
        <div>
            <img src={imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>${product.price.toFixed(2)}</p>
            <span>Quantity: {quantity}</span>
            <div>
                <button onClick={decrementQuantity}>-</button>
                <button onClick={incrementQuantity}>+</button>
            </div>
            <div>
                <h1>Total: ${totalPrice.toFixed(2)}</h1>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
            </div>
            <div>
                <button onClick={emptyCart}>Empty Cart</button>
                <button onClick={checkout}>Checkout
                    <h1>Total: {totalAmount}</h1>
                </button>
            </div>
        </div>
    );
}
