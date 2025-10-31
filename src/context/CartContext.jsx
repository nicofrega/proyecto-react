import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existing = cart.find(p => p.id === item.id);
        if (existing) {
            setCart(cart.map(p =>
                p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = id => setCart(cart.filter(p => p.id !== id));
    const clearCart = () => setCart([]);
    const totalPrice = () => cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    const totalQuantity = () => cart.reduce((acc, p) => acc + p.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
