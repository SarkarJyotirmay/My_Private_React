import React from "react";
import axios from "axios";

function App() {
  async function handleClick() {
    const response = await axios.get("https://randomuser.me/api/");
    console.log(response.data.results);
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default App;
