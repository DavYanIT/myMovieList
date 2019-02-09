import React from 'react'
import { Field, FieldArray } from 'redux-form'
import { browserHistory } from 'react-router'
import { RenderField, RenderFieldArray, RenderSelect, groupFields, kindFields } from '../'

export default (props) =>
  <form onSubmit={props.onSubmit}>
    <h3>{props.children}</h3>
    <Field component={RenderField} name="name" type="text" label="Name *" />
    <Field
      component={RenderSelect}
      disabledLabel="Select a group"
      options={groupFields}
      name="group"
      label="Group *" />
    <Field
      component={RenderSelect}
      disabledLabel="Select a kind"
      options={kindFields}
      name="kind"
      label="Kind *" />
    <Field component={RenderField} name="description" type="text" label="Description" textarea />
    <div className="col-md-12">
      <FieldArray
        component={RenderFieldArray}
        name="links"
        type="text"
        label="Link"
        buttonText="Add link"
        forLinks />
      <FieldArray
        component={RenderFieldArray}
        name="genres"
        type="text"
        label="Genres"
        buttonText="Add genre" />
    </div>
    <div className="center">
      <button type="submit" className="btn btn-primary">Submit</button>
      <button onClick={()=>browserHistory.goBack()} type="button" className="btn btn-danger">Cancel</button>
    </div>
  </form>