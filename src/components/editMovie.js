import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import { updateMovie } from '../actions/index'
import { FormTemplate, validate } from '../static'

class EditMovie extends Component {
  componentWillMount() {
    if(this.props.movie.name) this.props.initialize(this.props.movie)
  }

  componentWillReceiveProps(newProps) {
    if(!this.props.initialized && !this.props.valid) {
      this.props.initialize(newProps.movie)
    }
  }

  onSubmit(data) {
    updateMovie(this.props.movie.id, data)
    browserHistory.push('/')
  }

  render = () =>
    <FormTemplate onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
      Edit Movie {this.props.movie.name}
    </FormTemplate>
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps.params
  const { movies } = state.fStore.data
  const movie = movies ? movies[id] : null

  return {
    movie: {...movie, id}
  }
}

export default connect(mapStateToProps)(
  reduxForm({
    form: 'EditMovieForm',
    validate
  })(EditMovie)
)