import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import styled, { createGlobalStyle } from "styled-components"
import MostRecent from "./MostRecent"
import FindComic from "./FindComic"

const GlobalStyle = createGlobalStyle`
html{
  min-height: 100%;
  overflow-x: hidden;
  body {
    min-width: 320px;
    padding: 0;
    margin: 0;
    background-color: #96A8C8;
    text-align: center;
    font-family: Lucida,Helvetica,sans-serif;
    font-weight: 500;
    font-size: 16px;
    #root{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5rem 0;
    }
  }
}
`

const Navigation = styled.nav`
  display: inline-flex;
  list-style-type: none;
  padding-left: 12px;
  box-sizing: border-box;
  -webkit-box-align: center;
  align-items: center;
  height: 100%;
  letter-spacing: 0.05em;
  font-weight: 500;
  font-size: 0.85rem;
  li {
    padding: 0 5px;
    a {
      color: #fff;
    }
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Navigation>
          <li>
            <Link to="/">Most Recent</Link>
          </li>
          <li>
            <Link to="/find-comic">Find A Comic</Link>
          </li>
        </Navigation>

        <Switch>
          <Route path="/find-comic">
            <FindComic />
          </Route>
          <Route path="/">
            <MostRecent />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
