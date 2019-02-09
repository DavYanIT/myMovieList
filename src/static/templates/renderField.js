import React from 'react'

export default ({textarea, input, label, type, meta: {touched, error}}) =>
  <div className={`form-group ${touched && error ? "has-danger" : ""}`}>
    <label>{label}</label>
    <div>
      {textarea ?
        <textarea className="form-control" {...input} type={type}></textarea> :
        <input className="form-control" {...input} type={type}/>}
      {touched && error && <span className="error">{error}</span>}
    </div>
  </div>