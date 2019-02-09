import React from 'react'
import { RenderOptions } from '../'

export default ({input, label, options, disabledLabel, meta: {touched, error}}) =>
  <div className={`form-group ${touched && error ? "has-danger" : ""} filter`}>
    <label>{label}</label>
    <select className="form-control" {...input} >
      <option value="" disabled>{disabledLabel}</option>
      <RenderOptions options={options} />
    </select>
    {touched && error && <span className="error">{error}</span>}
  </div>