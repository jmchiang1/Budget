import React from 'react'

const ExpenseTransactions = ({expenseTransaction}) => {
    return (
        <li className="transaction" key="{ExpenseTransactions.id}" >
        <span className="transaction-text">{expenseTransaction.expenseText}</span>
        <span className="transaction-amount">{expenseTransaction.expenseAmount}</span>
        <button className="delete-btn">
        <i className="fa fa-trash"></i>
        </button>
    </li>
    )
}

export default ExpenseTransactions
