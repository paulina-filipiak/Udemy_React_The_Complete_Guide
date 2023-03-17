import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../../UI/Card/Card"
import "../../UI/Card/card.css"
import "./ExpensesAll.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"

function ExpensesAll(props) {
	const [inputValue, setinputValue] = useState("2020")
	// const [filteredData, setFilteredData] = useState(props.items)

	const onFilterInput = (queryValue) => {
		setinputValue(queryValue)
		// const filtered = props.items.filter(
		// 	(expense) => expense.date.getFullYear().toString() === inputValue
		// )
		// setFilteredData(filtered)
	}
	console.log(inputValue)
	return (
		<Card className="expenses">
			<ExpensesFilter selected={inputValue} onFilterInput={onFilterInput} />
			{/* {filteredData.length === 0 && <p>No expenses found.</p>} */}
			{props.items.map((item) => (
				<ExpenseItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</Card>
	)
}

export default ExpensesAll
