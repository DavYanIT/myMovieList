import React from 'react'
import { Field } from 'redux-form'
import { RenderField } from '../'

const renderLinkFields = (name, index, fields) =>
  <div key={index}>
    <h4>Link № {index+1}</h4>
    <Field
      component={RenderField}
      name={`${name}.linkName`}
      type="text"
      label="Name" />
    <Field
      component={RenderField}
      name={`${name}.linkAddress`}
      type="text"
      label="Address" />
    <button type="button" className="btn btn-danger" onClick={()=>fields.remove(index)}>Remove</button>
  </div>

const renderGenreField = (name, index, fields) =>
  <div key={index} className="form-group">
    <Field component={genreField} fields={fields} index={index} name={name} type="text" />
  </div>

const genreField = ({input, fields, index, meta: {touched, error}}) =>
  <div>
    <input className="form-control" style={{display: 'inline-block', width: '90%'}} {...input} />
    <button type="button" className="btn-danger" onClick={()=>fields.remove(index)}>X</button>
    <div>
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>

export default ({fields, forLinks, buttonText}) =>
  <ul className="list-group col-md-6 center">
    <button type="button" className="btn" onClick={()=>fields.push(forLinks?{}:[])}>{buttonText}</button>
    {fields.map(forLinks?renderLinkFields:renderGenreField)}
  </ul>