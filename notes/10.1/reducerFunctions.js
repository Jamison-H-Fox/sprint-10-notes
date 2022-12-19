// const initialState = { count: 0, name: 'Jamison' }

// This works, but the if/else if syntax can get long for complex data structures
// const reducer = (state, action) => {
//     if (action.type === 'increment') {
//         return { count: state.count + 1 }
//     } else if (action.type === 'decrement') {
//         return { count: state.count - 1 }
//     } else if (action.type === 'changeName') {
//         return { name: action.payload}
//     }
// }

// Use the switch statement to clean up the code:
const initialState = { count: 0 , name: 'Jamison' };
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'changeName':
            return { name: action.payload }
        default:
            return state;
    }
}

// console.log(reducer(initialState, { type: 'changeName', payload: 'Mickey Mouse' }))

// CHALLENGE:

const chalInitialState = [
    { description: 'item 1' },
    { description: 'item 2' },
    { description: 'item 3' },
    { description: 'item 4' },
]

const chalReducer = (state, action) => {
    switch(action.type) {
        case 'ADD':
            return [ ...chalInitialState, action.payload ]
        case 'DELETE':
            return chalInitialState.filter(item => {
                if (item.description !== action.payload.description) {
                    return item
                }
            })
        default:
            return state;
    }
}

console.log(chalReducer(initialState, {type: 'DELETE', payload: {description: 'item 4'}}))