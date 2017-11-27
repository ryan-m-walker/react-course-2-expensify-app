import { createStore } from 'redux'


// Action Generators - functions that return action objects
// Tell store something happened 

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})


// Reducers
// Tells store what to do when something happens
// 1. Reducers are pure functions
// 2. Never change state or action

const countReducer = (
  state = { count: 0 },
  action
) => {
  switch (action.type) {
    case 'INCREMENT':
      return { 
        count: state.count + action.incrementBy 
      }
    case 'DECREMENT':
      return { 
        count: state.count - action.decrementBy 
      }
    case 'RESET':
      return { 
        count: 0 
      }
    case 'SET':
      return { 
        count: action.count 
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

// SUBSCRIBE
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 5 }))
store.dispatch(incrementCount({ incrementBy: 10 }))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount({ decrementBy: 2 }))
store.dispatch(setCount({ count: 5 }))