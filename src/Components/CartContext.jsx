import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product, quantity) => {
        setCartItems(prevCartItems => {
            const existingItemIndex = prevCartItems.findIndex(item => item.id === product.id);
            if (existingItemIndex !== -1) {
                const updatedCartItems = [...prevCartItems];
                updatedCartItems[existingItemIndex].quantity += quantity;
                return updatedCartItems;
            } else {
                return [...prevCartItems, { ...product, quantity }];
            }
        });
    };

    const updateCartQuantity = (productId, newQuantity) => {
        setCartItems(prevCartItems =>
            prevCartItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems(prevCartItems =>
            prevCartItems.filter(item => item.id !== productId)
        );
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateCartQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
