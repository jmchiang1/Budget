import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState"; //give globalState access to this file

const IncomeTransactions = ({ incomeTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);  //destructure deleteTransaction

  return (
    <li className="transaction" key="{incomeTransactions.id}">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>  
      {/* render out incomeTransaction text */}
      <span className="transaction-amount">
        ${(incomeTransaction.incomeAmount).toLocaleString()}
        {/* render out incomeTransaction amount */}
      </span>
      <button className="delete-btn" onClick={() => deleteTransaction(incomeTransaction.id)}>
          {/* when button is clicked, will invoke deleteTransaction function */}
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default IncomeTransactions;
