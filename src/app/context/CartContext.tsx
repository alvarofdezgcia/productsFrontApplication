import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartContextType {
    count: number;
    setCount: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const savedCount = localStorage.getItem('cart_count');
        if (savedCount) {
            setCount(parseInt(savedCount, 10));
        }
    }, []);

    const updateCount = (newCount: number) => {
        setCount(newCount);
        localStorage.setItem('cart_count', newCount.toString());
    };

    return (
        <CartContext.Provider value={{ count, setCount: updateCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
