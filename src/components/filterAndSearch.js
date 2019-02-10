import React from 'react'
import { connect } from 'react-redux'
import { action } from '../actions/index'
import { CustomSelect, CustomRadios, groupFields, kindFields, statusFields, actionTypes } from '../static'

const { RENDER_GROUP, RENDER_OF_KIND, RENDER_WITH_STATUS, SET_SEARCH_FIELD, SET_SEARCH_TERM } = actionTypes

const FilterAndSearch = ({
  action,
  filterProps: { group, kind, status },
  searchProps: { term, field }
}) => (
  <div>
    <CustomSelect func={action} actionType={RENDER_GROUP} defVal={group} label="Group" fields={groupFields} />
    <CustomSelect func={action} actionType={RENDER_OF_KIND} defVal={kind} label="Kind" fields={kindFields} />
    <CustomSelect func={action} actionType={RENDER_WITH_STATUS} defVal={status} label="Status" fields={statusFields} />
    <CustomRadios values={['name', 'genre']} func={action} actionType={SET_SEARCH_FIELD} checkedField={field} />
    <input
      className="form-control"
      value={term}
      placeholder={`Search by ${field.toLowerCase()}`}
      onChange={(e) => action(SET_SEARCH_TERM, e.target.value)} />
  </div>
)

export default connect(
  state => ({
    filterProps: state.filterProps,
    searchProps: state.searchProps
  }),
  { action }
)(FilterAndSearch)