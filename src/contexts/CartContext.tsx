import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Pizza } from '../types';

type CartItem = {
  pizza: Pizza;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: Pizza }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CartItem[]): { totalItems: number; totalPrice: number } => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.pizza.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item.pizza.id === action.payload.id
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        updatedItems = [...state.items, { pizza: action.payload, quantity: 1 }];
      }

      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter((item) => item.pizza.id !== action.payload);
      const { totalItems, totalPrice } = calculateTotals(updatedItems);

      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalPrice,
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItems = state.items.map((item) =>
        item.pizza.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      
      const filteredItems = updatedItems.filter(item => item.quantity > 0);
      const { totalItems, totalPrice } = calculateTotals(filteredItems);

      return {
        ...state,
        items: filteredItems,
        totalItems,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
};

type CartContextType = {
  cart: CartState;
  addToCart: (pizza: Pizza) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      for (const item of parsedCart.items) {
        dispatch({ type: 'ADD_ITEM', payload: item.pizza });
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (pizza: Pizza) => {
    dispatch({ type: 'ADD_ITEM', payload: pizza });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};