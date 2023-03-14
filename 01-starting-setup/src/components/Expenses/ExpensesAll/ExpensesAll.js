import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../../UI/Card/Card"
import "../../UI/Card/card.css"
import "./ExpensesAll.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"

function ExpensesAll(props) {
	const [inputValue, setinputValue] = useState("2020")
	const [filteredData, setFilteredData] = useState(props.expenses)

	const onFilterInput = (queryValue) => {
		setinputValue(queryValue)
		const filtered = props.expenses.filter(
			(expense) => expense.date.getFullYear() == queryValue
		)
		setFilteredData(filtered)
	}
	console.log(inputValue)
	return (
		<Card className="expenses">
			<ExpensesFilter selected={inputValue} onFilterInput={onFilterInput} />
			{filteredData.length === 0 ? (
				<p>No expenses found.</p>
			) : (
				filteredData.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))
			)}
		</Card>
	)
}

export default ExpensesAll
