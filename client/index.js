import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './appRoutes'

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('rental-management-app'),
)
