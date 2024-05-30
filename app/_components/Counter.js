"use client";
import { useState } from "react";
function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>There are: {users.length} users</h2>
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>
        <p>{count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
