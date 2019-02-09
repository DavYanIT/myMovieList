import React from 'react'
import { RenderOptions } from '../'

export default ({func, defVal, label, fields}) => 
  <div key={label} className="form-group filter">
    {`${label}: `}
    <select
    defaultValue={defVal}
    onInput={e => func(e.target.value)}
    className="form-control inline-element" >
      <option value="all">All</option>
      <RenderOptions options={fields} />
    </select>
  </div>