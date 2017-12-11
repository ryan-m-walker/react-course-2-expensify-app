
export default expenses => 
  expenses.reduce((sum, current) => 
    sum + current.amount, 0)

