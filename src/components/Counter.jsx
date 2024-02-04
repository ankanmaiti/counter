import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState({ type: null, msg: null });

  const increment = () => {
    if (count >= 10) {
      setError({ msg: "Maximum Reached", type: "incr" });
      return;
    }
    setCount((prev) => prev + 1);
    setError(null);
  };

  const decrement = () => {
    if (count <= 0) {
      setError({ msg: "Minimum Reached", type: "decr" });
      return;
    }
    setCount((prev) => prev - 1);
    setError(null);
  };

  return (
    <>
      <div className="flex space-x-5 items-center">
        <button
          className="px-5 rounded bg-gray-700 text-2xl"
          onClick={decrement}
          disabled={error?.type === "decr"}
        >
          -
        </button>
        <p className="text-2xl">{count}</p>
        <button
          className="px-5 rounded bg-gray-700 text-2xl"
          onClick={increment}
          disabled={error?.type === "incr"}
        >
          +
        </button>
      </div>
      <p className="text-red-300">{error?.msg}</p>
    </>
  );
}
