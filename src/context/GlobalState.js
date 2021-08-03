import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [],
  expenseTransactions: [],
};

export const GlobalContext = createContext(initialState); //create the context api here

export const GlobalContextProvider = ({ children }) => { 
  //all children of contextProvider will have access to income and expense transactions
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => { 
    //pass in incomeTransaction data to the local storage, so it doesn't get deleted when you refresh the page
    //JSON.stringify is the data value that local storage takes
    localStorage.setItem("incomeTransactions", JSON.stringify(state.incomeTransactions))
  })
  useEffect(() => {
    localStorage.setItem("expenseTransactions", JSON.stringify(state.expenseTransactions))
  })

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

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    })
  }

  return (
    <GlobalContext.Provider 
    //Provider accepts a value prop to be passed to all it's children
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
        deleteTransaction,
        }}>
      {children} 
    </GlobalContext.Provider>
  );
};
