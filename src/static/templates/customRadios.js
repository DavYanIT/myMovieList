import React, { Fragment } from 'react'
import { beutify } from '../'

export default ({values, func, checkedField, actionType}) => values.map((value) => 
  <Fragment key={value}>
    <input
      type="radio"
      name="radio-group"
      id={value}
      value={value}
      onClick={(e) => func(actionType, e.target.value)}
      defaultChecked={checkedField==value}/>
    <label htmlFor={value}>{beutify(value)}</label>
  </Fragment>
)