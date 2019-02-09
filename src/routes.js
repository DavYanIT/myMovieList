import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import AddNew from './components/addNewMovie'
import MainPage from './components/mainPage'
import EditMovie from './components/editMovie'
import ErrorPage from './components/errorPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="/new" component={AddNew} />
        <Route exact path="/edit/:id" component={EditMovie} />
        <Route path="**" component={ErrorPage} />
    </Route>
);
