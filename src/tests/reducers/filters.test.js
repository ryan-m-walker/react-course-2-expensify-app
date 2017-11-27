import moment from 'moment'

import filtersReducer from '../../reducers/filters'


test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(defaultState, { type: 'SORT_BY_DATE' })
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, { 
    type: 'SET_TEXT_FILTER',
    text: 'text'
  })
  expect(state.text).toBe('text')
})

test('should set start date filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: 1000
  })
  expect(state.startDate).toBe(1000)
})

test('should set end date filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: 1000
  })
  expect(state.endDate).toBe(1000)
})
