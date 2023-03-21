import ExpenseItem from "../ExpenseItem/ExpenseItem"
import Card from "../../UI/Card/Card"
import "../../UI/Card/card.css"
import ExpensesChart from "../ExpensesChart/ExpensesChart"
import "./ExpensesAll.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import { useState } from "react"

function ExpensesAll(props) {
	const [inputValue, setinputValue] = useState("")
	// const [filteredData, setFilteredData] = useState(props.items)

	const onFilterInput = (queryValue) => {
		setinputValue(queryValue)
	}
	const filtered = props.items.filter(
		(expense) => expense.date.getFullYear().toString() === inputValue
	)
	console.log(inputValue)
	return (
		<Card className="expenses">
			<ExpensesFilter selected={inputValue} onFilterInput={onFilterInput} />
			<ExpensesChart expenses={filtered} />
			{inputValue === "" &&
				props.items.map((item) => (
					<ExpenseItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				))}
			{filtered.length > 0 &&
				filtered.map((item) => (
					<ExpenseItem
						key={item.id}
						title={item.title}
						amount={item.amount}
						date={item.date}
					/>
				))}
			{filtered.length === 0 && <p>No such items!</p>}
		</Card>
	)
}

export default ExpensesAll
