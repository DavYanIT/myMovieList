import React from 'react'
import { browserHistory } from 'react-router'
import { reduxForm } from 'redux-form'

import { addMovie } from '../actions/index'
import { FormTemplate, validate } from '../static'

function onSubmit(data) {
  addMovie(data)
  browserHistory.push('/')
}

const AddNew = (props) =>
  <FormTemplate onSubmit={props.handleSubmit(onSubmit)}>
    Add a new Movie
  </FormTemplate>

export default reduxForm({
    form: 'AddNewForm',
    validate
  })(AddNew)