import React from "react"
import ReactDOM from "react-dom"

import Menu from "./components/Menu"
import Main from "./components/Main"
import News from "./components/News"

function App() {
  return (
    <div>
      <Menu></Menu>
      <Main></Main>
      <News></News>
    </div>
  )
}

ReactDOM.render(<App></App>, document.querySelector("app"))
