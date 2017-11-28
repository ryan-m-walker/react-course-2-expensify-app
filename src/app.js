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


store.subscribe(() => {
  console.group('STORE')
  console.log(store.getState())
  console.groupEnd()
})


const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)
