import { createContext, useReducer } from "react";

export const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const initialState = [];
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD":
        return [payload, ...state];
      case "REMOVE":
        const removeOrder=state.filter((item)=>item.id !==payload.id)
        state=removeOrder
      default:
        return state;
    }
  };
  const [orders, dispatch] = useReducer(reducer, initialState);
  return (
    <OrderContext.Provider value={{ orders, dispatch }}>{children}</OrderContext.Provider>
  );
};
