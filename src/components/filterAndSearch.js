import React from 'react'
import { connect } from 'react-redux'
import { renderWithStatus, renderOfKind, renderGroup, setSearchField, setSearchTerm } from '../actions/index'
import { CustomSelect, CustomRadios, groupFields, kindFields, statusFields } from '../static'

const FilterAndSearch = ({
  renderGroup,
  renderOfKind,
  renderWithStatus,
  setSearchField,
  setSearchTerm,
  filterProps: { group, kind, status },
  searchProps: { term, field }
}) => (
  <div>
    <CustomSelect func={renderGroup} defVal={group} label="Group" fields={groupFields} />
    <CustomSelect func={renderOfKind} defVal={kind} label="Kind" fields={kindFields} />
    <CustomSelect func={renderWithStatus} defVal={status} label="Status" fields={statusFields} />
    <CustomRadios values={['name', 'genre']} func={setSearchField} checkedField={field} />
    <input
      className="form-control"
      value={term}
      placeholder={`Search by ${field.toLowerCase()}`}
      onChange={(e) => setSearchTerm(e.target.value)} />
  </div>
)

export default connect(
  state => ({
    filterProps: state.filterProps,
    searchProps: state.searchProps
  }),
  {
    renderWithStatus,
    renderOfKind,
    renderGroup,
    setSearchField,
    setSearchTerm
  }
)(FilterAndSearch)