/* eslint-disable no-unused-vars */
import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionFullDetails from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactions: [],
    Title: '',
    Amount: '',
    Type: transactionTypeOptions[0].optionId,
  }

  onSubmitTransaction = event => {
    event.preventDefault()
    const {Title, Amount, Type} = this.state
    const newTransaction = {
      id: v4(),
      Title,
      Amount: parseInt(Amount),
      Type,
    }

    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
    }))

    this.setState({Title: ''})
    this.setState({Amount: ''})
    this.setState({Type: 'Income'})
  }

  onDeleteTransaction = id => {
    const {transactions} = this.state
    const remainingTransfers = transactions.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({transactions: remainingTransfers})
  }

  onAddTitle = event => {
    this.setState({Title: event.target.value})
  }

  onAddAmount = event => {
    this.setState({Amount: event.target.value})
  }

  onAddType = event => {
    this.setState({Type: event.target.value})
  }

  getIncome = () => {
    const {transactions} = this.state
    let income = 0
    transactions.forEach(eachItem => {
      if (eachItem.Type === transactionTypeOptions[0].optionId) {
        income += eachItem.Amount
      }
    })
    return income
  }

  getExpenses = () => {
    const {transactions} = this.state
    let expenses = 0
    transactions.forEach(eachItem => {
      if (eachItem.Type === transactionTypeOptions[1].optionId) {
        expenses += eachItem.Amount
      }
    })
    return expenses
  }

  getBalances = () => {
    const {transactions} = this.state
    let balance = 0
    let IncomeAmo = 0
    let ExpensesAmo = 0
    transactions.forEach(eachItem => {
      if (eachItem.Type === transactionTypeOptions[0].optionId) {
        IncomeAmo += eachItem.Amount
      } else {
        ExpensesAmo += eachItem.Amount
      }
    })
    balance = IncomeAmo - ExpensesAmo
    return balance
  }

  render() {
    const {transactions, Title, Amount, Type, count} = this.state
    const IncomeAmount = this.getIncome()
    const ExpensesAmount = this.getExpenses()
    const BalanceAmount = this.getBalances()
    return (
      <div className="bg-container">
        <div className="card1-container">
          <div className="card1-sub-container">
            <h1 className="username">HI,Richard</h1>
            <p className="para1">
              Welcome back to your
              <span className="hightlight1">Money Manager</span>
            </p>
          </div>
        </div>
        <div className="card2-container">
          <MoneyDetails
            IncomeAmount={IncomeAmount}
            ExpensesAmount={ExpensesAmount}
            BalanceAmount={BalanceAmount}
          />
        </div>
        <div className="card3-container">
          <div className="transaction-container">
            <form onSubmit={this.onSubmitTransaction}>
              <h1>Add Transaction</h1>
              <label>
                <p>TITLE</p>
                <input
                  value={Title}
                  type="text"
                  placeholder="TITLE"
                  onChange={this.onAddTitle}
                />
                <p>AMOUNT</p>
                <input
                  value={Amount}
                  type="text"
                  placeholder="AMOUNT"
                  onChange={this.onAddAmount}
                />
                <p>TYPE</p>
              </label>
              <select onChange={this.onAddType} value={Type}>
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="history-container">
            <h1>History</h1>

            <ul className="tran-detail">
              <li className="head-container history1-container">
                <p className="head-title">Title</p>
                <p className="head-amount">Amount</p>
                <p className="head-balance">Type</p>
              </li>
              {transactions.map(eachItem => (
                <TransactionFullDetails
                  transactionDetails={eachItem}
                  key={eachItem.id}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
