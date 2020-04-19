import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PrivateRoute from './common/privateRoute'
//router
import { BrowserRouter as Router, Route } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import configureStore from './store'
import * as serviceWorker from './serviceWorker'

import configureSocket from './store/socket/socket'
import { User, Dashboard, Auth, Quest, Join, Client, Host, Home } from './page'

const store = configureStore()
export const socket = configureSocket(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Join} />
      <Route path="/auth" component={Auth} />
      <Route path="/home" component={Home} />
      <Route path="/client" component={Client} />
      <Route path="/quest" component={Quest} />
      <PrivateRoute path="/user" component={User} />
      <Route path="/host" component={Host} />
      <Route strict path="/dashboard" component={Dashboard} />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can changec
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
