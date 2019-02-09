import React from 'react'
import { beutify } from '../'

export default ({options}) => options.map((value) =>
    <option key={value} value={value}>{beutify(value)}</option>
)