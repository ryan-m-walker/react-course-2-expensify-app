import React, { Component } from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'


export class AddExpensePage extends Component {
  onSubmit = expense => {
    this.props.addExpense(expense)
    this.props.history.push('/')
  }
  render() {
    const { history } = this.props
    const { onSubmit } = this
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={onSubmit} />
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
    addExpense: expense => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)
