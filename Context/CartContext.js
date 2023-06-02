import React, { createContext, useReducer } from "react";

export const cartContext = createContext();
export const CartProvider = ({ children }) => {
  const initialState = [];

  const cartreducer = (cart, action) => {
    switch (action.type) {
      case "Add":
        console.log(action.payload);
        const itemPresen = cart.find((item) => item.id === action.payload.id);
        if (itemPresen) {
          itemPresen.quantity++;
        } else {
          return [...cart, { ...action.payload, quantity: 1 }];
        }
      case "increment":
        const newCart = cart.filter((item) => item.id != action.payload.id);
        const itemPrese = cart.find((item) => item.id === action.payload.id);
        return [...newCart, { ...itemPrese, quantity: itemPrese.quantity + 1 }];

      case "decrement":
        const itemPresent = cart.find((item) => item.id === action.payload.id);
        if (itemPresent.quantity == 1) {
          itemPresent.quantity = 0;
          const removeItem = cart.filter(
            (item) => item.id !== action.payload.id
          );
          cart = removeItem;
        } else {
          itemPresent.quantity--;
        }
      default:
        return cart;
    }
  };
  const [cart, dispatch] = useReducer(cartreducer, initialState);

  return (
    <cartContext.Provider value={{ cart, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};
