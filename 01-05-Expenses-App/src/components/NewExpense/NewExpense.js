import "./newExpense.css"
import ExpenseForm from "./ExpenseForm/ExpenseForm"
import { useState } from "react"

const NewExpense = (props) => {
	const [visibleForm, setVisibleForm] = useState(false)
	const [visibleButton, setVisibleButton] = useState(true)
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData)
		setVisibleButton(true)
		setVisibleForm(false)
	}
	return (
		<div className="new-expense">
			{visibleButton && (
				<button
					onClick={() => {
						setVisibleForm(true)
						setVisibleButton(false)
					}}>
					Add new expense
				</button>
			)}
			{visibleForm && (
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
			)}
		</div>
	)
}
export default NewExpense
