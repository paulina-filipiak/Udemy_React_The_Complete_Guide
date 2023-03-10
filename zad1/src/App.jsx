import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Logo from "./Components/Logo/Logo"
import Headline1 from "./Components/Headlines/Headline1"
import Card from "./Components/Card/Card"
import Pararaph from "./Components/Paragraph/Paragraph"
import StyledButton from "./Components/Button/Button.styled"

function App() {
  const array = [
    {
      id: "produkt1",
      name: "Banan",
      items: [],
      quantity: 3,
      price: 10,
      metadata: {
        whatever: "cokolwiek",
      },
    },
    {
      id: "produkt2",
      name: "Japko",
      quantity: 4,
      price: 12,
      metadata: {
        whatever: "cokolwiek2",
      },
    },
    {
      id: "produkt3",
      name: "Orzech",
      quantity: 6,
      items: [1, 5, 6],
      price: 40,
      metadata: {
        whatever: "cokolwiek3",
      },
    },
  ]
  return (
    <div className="App">
      <StyledButton>Click me!</StyledButton>
      {array.map((element) => {
        if (!element.items) {
          return null
        } else {
          if (element.items.length === 0) {
            return <p>Nie ma itemsów!</p>
          }
        }
        return (
          <div key={element.id}>
            <p>{element.name}</p>
            <p>{element.quantity}</p>
            <p>{`${element.price} cebulionów`}</p>
            <span>{element.metadata.whatever}</span>
          </div>
        )
      })}
      {/* <div>
        <Logo
          href="https://vitejs.dev"
          src="/vite.svg"
          className="logo"
          alt="Vite logo"
        />
        <Logo
          href="https://reactjs.org"
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </div>
      <Headline1 value="Vite + React" />
      <Card className={"card"}>
        <Pararaph
          className={"read-the-docs"}
          text={"Click on the Vite and React logos to learn more"}
        />
        <Pararaph
          className={"read-the-docs"}
          text={"Click on the Vite and React logos to learn more"}
        />
      </Card> */}
    </div>
  )
}

export default App
