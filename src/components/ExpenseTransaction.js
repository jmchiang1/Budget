//Does the same functions as the IncomeTransaction.js file

import React, {useContext} from 'react'
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransactions = ({expenseTransaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className="transaction" key="{ExpenseTransactions.id}" >
        <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">{expenseTransaction.expenseAmount}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(expenseTransaction.id)}>
        <i className="fa fa-trash"></i>
        </button>
    </li>
    )
}

export default ExpenseTransactions
