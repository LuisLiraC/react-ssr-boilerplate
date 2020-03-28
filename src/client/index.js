import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './routes/App'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

ReactDOM.hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app')
)
