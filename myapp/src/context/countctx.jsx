import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  return (
    <CartContext.Provider value={{ count, setCount, cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};