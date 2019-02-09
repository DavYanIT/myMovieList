import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxFirestore } from 'redux-firestore'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import reducers from './reducers'
import promise from 'redux-promise'
import fbConfig from './config/fbConfig'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(promise),
    reduxFirestore(fbConfig)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container')
)
