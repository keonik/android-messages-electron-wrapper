import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

const f = async () => {
  const result = await fetch("google.com")
  console.log(result)
}
class App extends Component {
  constructor() {
    super()
    f()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
