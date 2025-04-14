import { useState } from "react";

const Counter = () => {
  let [counter, setCounetr] = useState(0);

  const handleClick = (val, toReset) => {
    if (toReset) {
      setCounetr(0);
      return;
    }
    setCounetr(counter + val);
  };

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => handleClick(1)}>Increment</button>
      <button onClick={() => handleClick(-1)}>Decrement</button>
      <button onClick={() => handleClick(0, true)}>Reset</button>
    </>
  );
};

export { Counter };
