import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 15000 },
    { id: 2, incomeText: "Job", incomeAmount: 5000 },
  ],
  expenseTransactions: [
    { id: 3, expenseText: "Rent", incomeAmount: 3000 },
    { id: 4, expenseText: "Food", incomeAmount: 500 },
  ],
};

export const GlobalContext = createContext(initialState); //create the context api here

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        //all children of contextProvider will have access to income and expense transactions
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        }}>
      {children} 
    </GlobalContext.Provider>
  );
};
