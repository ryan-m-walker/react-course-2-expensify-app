import React, { Component } from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'


class ExpenseForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: false
    }
  }

  onDescriptionChange = e => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  onNoteChange = e => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }

  onAmountChange = e => {
    const amount = e.target.value
  if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    } 
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({ calenderFocused: focused }))
  }

  onSubmit = e => {
    e.preventDefault()
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide a description and amount.' }))
    } else {
      const { description, note, amount, createdAt } = this.state
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note
      })
    }
  }

  render() {
    const { 
      description, 
      note, 
      amount, 
      createdAt, 
      calenderFocused,
      error,
    } = this.state
    const { 
      onDescriptionChange, 
      onNoteChange, 
      onAmountChange, 
      onDateChange, 
      onFocusChange, 
      onSubmit,
    } = this

    return (
      <div>
        { error && <p>{ error }</p> }
        <form onSubmit={onSubmit}>
          <input
            autoFocus
            placeholder='Description'
            type='text'
            value={description}
            onChange={onDescriptionChange} />
          <input 
            type='text'
            placeholder='Amount'
            onChange={onAmountChange}
            value={amount}/>
          <SingleDatePicker 
            date={createdAt}
            onDateChange={onDateChange}
            focused={calenderFocused}
            onFocusChange={onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => false} />
          <textarea
            onChange={onNoteChange}
            value={note}
            placeholder='Add a note for your expense (optional)'>
          </textarea>
          <button>
            { this.props.expense ? 'Save Expense' : 'Add Expense' }
          </button>
        </form>
      </div>
    )
  }
}


export default ExpenseForm
