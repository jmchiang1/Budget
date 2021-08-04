import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid"; //random id generator
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    //React Hook: allow using of state without writing a class.
    //Set the following variables to empty string and 0 as the initial values. This is data that will initially be rendered
    incomeText: "",
    incomeAmount: 0,
  });

  // ADDING INCOME TEXT AND AMOUNT
  // ADDING INCOME TEXT AND AMOUNT
  // ADDING INCOME TEXT AND AMOUNT

  const { incomeText, incomeAmount } = income; 
  //Destructure Text and Amount to equal just "income"
  //Useful for when you want to change both states while only using one word. 
  //Used on onChange function to re-render previously submitted data

  const onChangeIncome = (event) => {
    //onChange handle event with event name and value
    //Store expense and amount in the global state
    setIncome({ ...income, [event.target.name]: event.target.value });
    //Spread syntax: allows arrays/string to be expanded in places where 0 or more variables are expected
  };

  const onSubmitIncome = (event) => {
    event.preventDefault(); //prevent page from refreshing upon submission

    if (incomeText) { //If text exist, then execute the following code...
      //Ensures that empty text does that get passed in and create errors or ugly UI experience
      const newIncomeTransaction = {  //create new transaction object here
        id: uuidv4(), //generate random id when new income gets added
        incomeText,
        incomeAmount: incomeAmount * 1,
      };
      addIncome(newIncomeTransaction); //add curent income to the history list and re-render
      //addIncome function defined in GlobalState.js and AppReducer as Redux Reducer
  
      setIncome({
        //setIncome = the current state of the income data.
        //set the text and amount back to zero once you press submit. Code on line 71 / 79
        incomeText: "",
        incomeAmount: 0,
      });
    }
  };

  // ADDING EXPENSE TEXT AND AMOUNT
  // ADDING EXPENSE TEXT AND AMOUNT
  // ADDING EXPENSE TEXT AND AMOUNT

  const [expense, setExpense] = useState({ 
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const onSubmitExpense = (event) => {
    event.preventDefault();

    if (expenseText){
      const newExpenseTransaction = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1,
      };
      addExpense(newExpenseTransaction);
  
      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}> 
      {/* form submit button invokes the onSubmitIncome function defined above  */}
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}  //change text information
            placeholder="Add Income"
            autoComplete="off"
            onChange={onChangeIncome} //changing the input fields will trigger onChange function, which will store all data in local storage
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="Submit" 
          // value="Submit" 
          />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name="expenseText"
            value={expenseText}
            placeholder="Add Expense"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name="expenseAmount"
            value={expenseAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="Submit" 
          // value="Submit" 
          />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
