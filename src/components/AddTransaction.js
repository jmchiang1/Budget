import React, { useState, useContext } from "react";
import {v4 as uuidv4} from 'uuid'   //random id generator 
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
    const {addIncome} = useContext(GlobalContext)
  const [income, setIncome] = useState({
    //React Hook: allow using of state without writing a class. Set the following variables to empty string and 0.
    incomeText: "",
    incomeAmount: 0,
  });

  const {incomeText, incomeAmount} = income;

  const onChangeIncome = (event) => {   //onChange handle event with event name and value
      setIncome({...income,[event.target.name]: event.target.value})    
      //spread syntax: allows arrays/string to be expanded in places where 0 or more variables are expected 
  };

  const onSubmitIncome = (event) => {
      event.preventDefault();

      const newIncomeTransaction = {
          id: uuidv4(),  //generate random id when new income gets added
          incomeText,
          incomeAmountL: incomeAmount * 1
      }
      addIncome(newIncomeTransaction)
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income"
            autoComplete="off"
            onChange={onChangeIncome}   //pass onChange handle function from line 10
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            onChange={onChangeIncome}   //pass onChange handle function from line 10
          />
          <input type="Submit" value="Submit" />
        </div>
      </form>
      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="Submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
