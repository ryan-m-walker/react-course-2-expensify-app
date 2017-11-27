import moment from 'moment'

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters'


test('should setup SET_TEXT_FILTER action object with user value', () => {
  expect(setTextFilter('text'))
  .toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'text'
  })
})

test('should set up SET_TEXT_FILTER action object with no value provided', () => {
  expect(setTextFilter())
  .toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should set up SORT_BY_DATE action object', () => {
  expect(sortByDate())
  .toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should set up SORT_BY_AMOUNT action object', () => {
  expect(sortByAmount())
  .toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should setup SET_START_DATE action object', () => {
  expect(setStartDate(moment(0)))
  .toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should setup SET_END_DATE action object', () => {
  expect(setEndDate(moment(0)))
  .toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})
