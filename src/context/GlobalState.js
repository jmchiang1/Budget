import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {  //dummy data for initial state: testing purposes
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
  //all children of contextProvider will have access to income and expense transactions
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addIncome = incomeTransaction => {  //Redux Action creator with dispatch
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction
    });
  };
  const addExpense = expenseTransaction => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction
    });
  };

  return (
    <GlobalContext.Provider 
    //Provider accepts a value prop to be passed to all it's children
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense
        }}>
      {children} 
    </GlobalContext.Provider>
  );
};
