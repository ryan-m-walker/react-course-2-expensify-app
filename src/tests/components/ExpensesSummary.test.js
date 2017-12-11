import React from 'react'
import { shallow } from 'enzyme'

import { ExpensesSummary } from '../../components/ExpensesSummary' 

test('Should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenseCount={1}
      expensesTotal={1231} />
  )
  expect(wrapper).toMatchSnapshot()

})

test('Should correctly render ExpensesSummary with multiple expense', () => {
  const wrapper = shallow(
    <ExpensesSummary 
      expenseCount={23}
      expensesTotal={1231123} />
  )
  expect(wrapper).toMatchSnapshot()
})
  