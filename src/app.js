import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-dates/lib/css/_datepicker.css'

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getFilteredExpenses from './selectors/expenses' 

import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore()

store.dispatch(addExpense({
  description: 'Water Bill',
  amount: 5000,
  createdAt: 30000
}))

store.dispatch(addExpense({
  description: 'Gas Bill',
  amount: 6500,
  createdAt: 20000
}))

store.dispatch(addExpense({
  description: 'Rent',
  amount: 100000,
  createdAt: 10000
}))

store.subscribe(() => {
  console.group('STORE')
  console.log(store.getState())
  console.groupEnd()
})




ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>, 
  document.getElementById('app')
)
