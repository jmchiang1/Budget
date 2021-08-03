import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext) //give income and expense data to balance.js file

  const incomeAmounts = incomeTransactions.map(incomeTransaction => incomeTransaction.incomeAmount)
  //return all incomes

  const expenseAmounts = expenseTransactions.map(expenseTransaction => expenseTransaction.expenseAmount)
  //return all expenses

  const totalIncome = incomeAmounts.reduce((acc, item) => (acc += item), 0);
  //reduce all income amounts and add them together
  //toFixed(): formats a number using fixed-point notation

  const totalExpense = expenseAmounts.reduce((acc, item) => (acc += item), 0);
  //reduce all expense amounts and add them together

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3> ${(totalIncome - totalExpense).toLocaleString()} </h3>
      {/* income - expenses */}
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p> ${(totalIncome).toLocaleString()} </p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p> ${(totalExpense).toLocaleString()} </p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
