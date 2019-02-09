import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'

const App = (props) =>
  <div>
    {props.children}
  </div>

export default firestoreConnect([{collection: 'movies', orderBy: ['name', 'asc']}])(App)