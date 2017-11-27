import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


// ADD_EXPENSE
const addExpense = (
  { 
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})


// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (
  state = expensesReducerDefaultState, 
  action
) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => 
        expense.id === action.id
        ? { ...expense, ...action.updates }
        : expense
      )
    default: 
      return state
  }
}


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
})


// Filters Reducer 

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (
  state = filtersReducerDefaultState,
  action
) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }  
    default:
      return state
  }
}


// Get visible expenses
const getVisibleExpenses = (
  expenses, 
  { text, sortBy, startDate, endDate }
) => {
  return expenses.filter(expense => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else {
      return a.amount < b.amount ? 1 : -1
    }
  })
}


// Store Creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

// Subscribe Console Log
store.subscribe(() => {
  console.log(store.getState())
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})


const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 500,
  createdAt: 1000
}))


const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300,
  createdAt: 2000
}))

store.dispatch(sortByAmount())


// store.dispatch(removeExpense({ 
//   id: expenseOne.expense.id 
// }))

// store.dispatch(editExpense(
//   expenseTwo.expense.id,
//   { amount: 500 }
// ))

// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())



// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(500))
// store.dispatch(setEndDate())





const demoState = {
  expenses: [
    {
      id: 'lsfdjadsf',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}
