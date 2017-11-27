import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates';

import { 
  setTextFilter, 
  sortByDate, 
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filters'


export class ExpenseListFilters extends Component {
  state = {
    calenderFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate)
    this.props.setEndDate(endDate)
  }
  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }))
  }
  onTextChange = e => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate()
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount()
    }
  }
  render() {
    const { filters, dispatch } = this.props
    const { calenderFocused } = this.state
    const { onTextChange, onSortChange } = this
    return (
      <div>
        <input
          onChange={onTextChange}
          type='text'
          value={filters.text}/>
        <select 
          value={filters.sortBy}
          onChange={onSortChange}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker 
          showClearDates
          startDate={filters.startDate}
          endDate={filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false} />
      </div>
    )
  }
}
  


const mapStateToProps = ({ filters }) => ({ filters })

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)
