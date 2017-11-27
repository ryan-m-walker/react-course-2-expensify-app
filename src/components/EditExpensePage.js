import React, { Component } from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'

import { editExpense, removeExpense } from '../actions/expenses' 


export class EditExpensePage extends Component {
  onSubmit = item => {
    const { expense, editExpense, history } = this.props
    editExpense(expense.id, item)
    history.push('/')
  }
  handleRemove = () => {
    const { expense, removeExpense, history } = this.props
    removeExpense({ id: expense.id })
    history.push('/')
  }
  render() {
    const { expense, dispatch, history } = this.props
    const { onSubmit, handleRemove } = this
    return (
      <div>
        <ExpenseForm
          expense={expense} 
          onSubmit={onSubmit} />
        <button
          onClick={handleRemove}>
          Remove
        </button>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
    expense: state.expenses.filter(expense => 
      expense.id === props.match.params.id
    )[0]
})

const mapDispatchToProps = dispatch => ({
  editExpense: (id, item) => dispatch(editExpense(id, item)),
  removeExpense: id => dispatch(removeExpense(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)
