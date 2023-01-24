import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Logo from "./Components/Logo/Logo"
import Headline1 from "./Components/Headlines/Headline1"
import Card from "./Components/Card/Card"
import Pararaph from "./Components/Paragraph/Paragraph"

function App() {
  return (
    <div className="App">
      <div>
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
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a> */}
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <Headline1 value="Vite + React" />
      {/* <h1>Vite + React</h1> */}
      <Card className={"card"}>
        <Pararaph
          className={"read-the-docs"}
          text={"Click on the Vite and React logos to learn more"}
        />
        <Pararaph
          className={"read-the-docs"}
          text={"Click on the Vite and React logos to learn more"}
        />
      </Card>

      {/* <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div> */}
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
