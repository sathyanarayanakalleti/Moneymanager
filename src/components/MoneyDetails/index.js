// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {IncomeAmount, ExpensesAmount, BalanceAmount} = props

  return (
    <div className="md-container">
      <div className="md-card1-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image1"
        />
        <div className="md-card1-sub-container">
          <p className="md-para1">Your Balance</p>
          <p className="md-para2" testid="balanceAmount">
            RS. {BalanceAmount}
          </p>
        </div>
      </div>
      <div className="md-card2-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image1"
        />
        <div className="md-card1-sub-container">
          <p className="md-para1">Your Income</p>
          <p className="md-para2" testid="incomeAmount">
            RS. {IncomeAmount}
          </p>
        </div>
      </div>
      <div className="md-card3-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image1"
        />
        <div className="md-card1-sub-container">
          <p className="md-para1">Your Expenses</p>
          <p className="md-para2" testid="expensesAmount">
            RS. {ExpensesAmount}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
