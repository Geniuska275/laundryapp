import React, { useState } from "react";
import { createContext, useReducer } from "react";
import { data } from "../data/stores";
export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD":
        return [payload, ...state];
      default:
        return state;
    }
  };
  const [stores, dispatch] = useReducer(reducer, data);
  return (
    <StoreContext.Provider value={{ stores, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
