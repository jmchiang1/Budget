import React from 'react'

const IncomeTransactions = ({incomeTransaction}) => {
    return (
        <li className="transaction" key="{incomeTransactions.id}" >
        <span className="transaction-text">{incomeTransaction.incomeText}</span>
        <span className="transaction-amount">{incomeTransaction.incomeAmount}</span>
        <button className="delete-btn">
        <i className="fa fa-trash"></i>
        </button>
    </li>
    )
}

export default IncomeTransactions
