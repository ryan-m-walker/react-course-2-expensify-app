import React from 'react'
import { connect } from 'react-redux'

import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import selectExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import ExpensesSummary from './ExpensesSummary'


export const ExpenseDashboardPage = ({expenses}) => (
  <div>
    <ExpenseListFilters />
    <ExpensesSummary />
    <ExpenseList />
  </div>
)



const mapState = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
})

export default connect(mapState)(ExpenseDashboardPage)
