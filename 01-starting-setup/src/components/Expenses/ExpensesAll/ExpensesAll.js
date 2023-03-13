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
			<ExpenseItem
				title={props.expenses[0].title}
				amount={props.expenses[0].amount}
				date={props.expenses[0].date}
			/>
			<ExpenseItem
				title={props.expenses[1].title}
				amount={props.expenses[1].amount}
				date={props.expenses[1].date}
			/>
			<ExpenseItem
				title={props.expenses[2].title}
				amount={props.expenses[2].amount}
				date={props.expenses[2].date}
			/>
			<ExpenseItem
				title={props.expenses[3].title}
				amount={props.expenses[3].amount}
				date={props.expenses[3].date}
			/>
		</Card>
	)
}

export default ExpensesAll
