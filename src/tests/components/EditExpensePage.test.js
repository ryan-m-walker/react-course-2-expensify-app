import React from 'react'
import { shallow } from 'enzyme'

import { EditExpensePage } from '../../components/EditExpensePage'

import expenses from '../fixtures/expenses'


let history, wrapper, editExpense, removeExpense, item

beforeEach(() => {
  removeExpense = jest.fn()
  editExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(
    <EditExpensePage
      removeExpense={removeExpense}
      editExpense={editExpense}
      expense={expenses[0]}
      history={history}/>
  ),
  item = {
    description: 'New item',
    amount: 5000,
  }
})

test('should render edit expense page', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(item)
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, item)
})

test('should handle remove expense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[0].id})
})
