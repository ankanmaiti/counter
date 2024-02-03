import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incr":
      if (state.count >= 10)
        return { ...state, error: { msg: "Maximum Reached", type: "incr" } };
      return { ...state, count: state.count + 1, error: null };

    case "decr":
      if (state.count <= 0)
        return { ...state, error: { msg: "Minimum Reached", type: "decr" } };
      return { ...state, count: state.count - 1, error: null };

    default:
      break;
  }
}

export function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: {} });

  const increment = () => dispatch({ type: "incr" });
  const decrement = () => dispatch({ type: "decr" });

  return (
    <>
      <div className="flex space-x-5 items-center">
        <button
          className="px-5 rounded bg-gray-700 text-2xl"
          onClick={decrement}
          disabled={state?.error?.type === "decr"}
        >
          -
        </button>
        <p className="text-2xl">{state.count}</p>
        <button
          className="px-5 rounded bg-gray-700 text-2xl"
          onClick={increment}
          disabled={state?.error?.type === "incr"}
        >
          +
        </button>
      </div>
      <p className="text-red-300">{state?.error?.msg}</p>
    </>
  );
}
