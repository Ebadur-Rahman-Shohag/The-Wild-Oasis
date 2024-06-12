"use client";
import { useState } from "react";

function Counter({ users }) {
  // Initialize the count state with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Display the number of users */}
      <h2>There are: {users.length} users</h2>

      <div>
        {/* Button to decrement the count */}
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>
          -
        </button>

        {/* Display the current count */}
        <p>{count}</p>

        {/* Button to increment the count */}
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
