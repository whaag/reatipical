import { useReducer } from "react"

const initialState = { count: 0 };
type state = {
  count: number;
}

type updateAction = {
  type: 'increment' | 'decrement' 
  payload: number
}
type resetAction = {
  type: 'reset'
}
type action = updateAction | resetAction;


const reducer = (state: state, action: action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [st, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: { st.count }
      <button onClick={() => dispatch({ type: 'increment', payload: 10})}>
        plus 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10})}>
        minus 10
      </button>
      <button onClick={() => dispatch({ type: 'reset'})}>reset</button>
    </>
  )
}