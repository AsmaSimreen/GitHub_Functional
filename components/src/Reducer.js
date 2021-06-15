import React, { useState } from "react";
//Counter
//Decrement the Counter
//Increment the Counter
//Clear the Counter

const init = {
    counter =0,
};

function MyReducer(state, action) {
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return { count: state.counter + action.payload };
        case "DECREMENT_COUNTER":
            return { counter: state.counter - action.payload };
        case "CLEAR_COUNTER":
            return { counter: 0 };
        default:
            return state;
    }
}
export default function Reducer() {
    const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(MyReducer, init);
    return (
        <h1>
            {state.counter}
            <button onClick={() => {
                dispatch({ type: "INCREMENT_COUNTER", payload: 10 })
            }}
            >Increase
            </button>
            <button onClick={() => {
                dispatch({ type: "DECREMENT_COUNTER", payload: 10 })
            }}
            >Decrease
            </button>
            <button onClick={() => {
                dispatch({ type: "CLEAR_COUNTER", payload: 10 })
            }}
            >Clear
            </button>
        </h1>
    )
}