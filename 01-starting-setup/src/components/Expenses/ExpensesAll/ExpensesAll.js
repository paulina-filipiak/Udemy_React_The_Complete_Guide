import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../../UI/Card/Card"
import "../../UI/Card/card.css"
import "./ExpensesAll.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"
function ExpensesAll(props) {
	const [inputValue, setinputValue] = useState("2020")
	const onFilterInput = (queryValue) => {
		setinputValue(queryValue)
	}
	console.log(inputValue)
	return (
		<Card className="expenses">
			<ExpensesFilter selected={inputValue} onFilterInput={onFilterInput} />
			{props.expenses.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</Card>
	)
}

export default ExpensesAll
