import expenseReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should set default state', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove item by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([ expenses[0], expenses[2] ])
})

test('should not remove item if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      description: 'Item',
      note: '',
      amount: 5000,
      createdAt: 1000
    }
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '2',
    updates: {
      description: 'New Item',
      note: 'This is a note'
    }
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual([ 
    expenses[0], 
    {...expenses[1], ...action.updates}, 
    expenses[2] 
  ])
})

test('should not edit expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      description: 'New Item',
      note: 'This is a note',
      amount: 6000,
      createdAt: 10000
    }
  }
  const state = expenseReducer(expenses, action)
  expect(state).toEqual(expenses)
})
