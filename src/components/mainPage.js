import React, { Fragment } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { filteredAndFound } from '../static'
import MovieList from './movieList'
import FilterAndSearch from './filterAndSearch'

const MainPage = (props) =>
  <Fragment>
    <FilterAndSearch />
    <div className="flex-container">
      <h2>My Movie List</h2>
      <Link to="/new" className="btn btn-lg">Add</Link>
    </div>
    <ul className="list-group">
      {/* show `Loading...` till fetching movies */}
      {props.movies && <MovieList movies={
        filteredAndFound(props.movies, props.filterProps, props.searchProps)
      }/>}
    </ul>
  </Fragment>

export default connect(
  state => ({
    filterProps: state.filterProps,
    searchProps: state.searchProps,
    movies: state.fStore.ordered.movies
  })
)(MainPage)