import { createStore } from 'redux'

//Action generators - Functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
    case 'INCREMENT':
        // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + action.incrementBy
        }
        break;
    case 'DECREMENT':
        // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
        return {
            count: state.count - action.decrementBy
        }
    case 'RESET':
        return {
            count:  0
        }
    case 'SET':
        return {
            count: action.count
        }
    default:
    return state;
        break;
}  
});

store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// })

// store.dispatch({
//         type: 'INCREMENT'        
//     })

// store.dispatch({
//         type: 'DECREMENT',
//         decrementBy : 3
//     })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(decrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))


console.log(store.getState())