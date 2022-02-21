// Write your code here
import './index.css'

const TransactionFullDetails = props => {
  const {transactionDetails, onDeleteTransaction} = props
  const {id, Title, Amount, Type} = transactionDetails
  const deleteTransfer = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="list-detail list-container">
      <p className="head-title1">{Title}</p>
      <p className="head-amount1">{Amount}</p>
      <p className="head-balance1">{Type}</p>

      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-image"
        onClick={deleteTransfer}
        testid="delete"
      />
    </li>
  )
}
export default TransactionFullDetails
