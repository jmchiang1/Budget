import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid"; //random id generator
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    //React Hook: allow using of state without writing a class.
    //Set the following variables to empty string and 0 as the initial values
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income; 
  //destructure incomeText and incomeAmount to equal just "income"
  //useful for when you want to change both states with less words

  const onChangeIncome = (event) => {
    //onChange handle event with event name and value
    //store expense and amount in the global state
    setIncome({ ...income, [event.target.name]: event.target.value });
    //spread syntax: allows arrays/string to be expanded in places where 0 or more variables are expected
  };

  const onSubmitIncome = (event) => {
    event.preventDefault();

    const newIncomeTransaction = {
      id: uuidv4(), //generate random id when new income gets added
      incomeText,
      incomeAmount: incomeAmount * 1,
    };
    addIncome(newIncomeTransaction); //add curent income to the list and re-render new list

    setIncome({
      //set the text and amount back to zero once you press submit. Code on line 71 / 79
      incomeText: "",
      incomeAmount: 0,
    });
  };

  const [expense, setExpense] = useState({ 
    //text and number are both empty at first.
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (event) => {
    setExpense({ ...expense, [event.target.name]: event.target.value });
  };

  const onSubmitExpense = (event) => {
    event.preventDefault();

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
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            value={incomeText}  //change text information
            placeholder="Add Income"
            autoComplete="off"
            onChange={onChangeIncome} //pass onChange handle function
          />
          <input
            type="number"
            name="incomeAmount"
            value={incomeAmount}    //change amount information
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}
          />
          <input type="Submit" value="Submit" />
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
          <input type="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
