import { 
  addExpense, 
  editExpense, 
  removeExpense 
} from '../../actions/expenses'


test('Should setup remove expense action object', () => 
  expect(removeExpense({ id: '123abc'}))
  .toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
)

test('Should setup edit expense action object', () => 
  expect(editExpense('123abc', { a: 'a', b: 'b' }))
  .toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      a: 'a',
      b: 'b'
    }
  })
)

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last months rent',
    amount: 1000,
    createdAt: 109500
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expense action object with default values', () =>
  expect(addExpense())
  .toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      amount: 0,
      createdAt: 0,
      note: '',
      description: '',
      id: expect.any(String)
    }
  })
)