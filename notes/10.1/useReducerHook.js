import React, { useReducer } from "react";

const initialState = { count: 0 , name: 'Jamison' };

function reducer(state, action) {
    switch(action.type) {
        case 'INCREASE':
            return { count: state.count + 1 };
        case 'DECREASE':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>Count: {state.count}</p>
      <div className="button">
        <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>
      </div>
    </div>
  );
}

export default App;

// CHALLENGE: