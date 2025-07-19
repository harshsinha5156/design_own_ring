// src/context/CartContext.js
import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, id: Date.now() }]);
  };

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, { ...product, id: Date.now() }]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const moveToWishlist = (item) => {
    removeFromCart(item.id);
    addToWishlist(item);
  };

  const moveToCart = (item) => {
    removeFromWishlist(item.id);
    addToCart(item);
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout!');
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        moveToWishlist,
        moveToCart,
        handleCheckout
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);