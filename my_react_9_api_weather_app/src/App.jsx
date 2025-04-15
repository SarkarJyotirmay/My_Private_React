import React, { useState } from "react";
import axios from "axios";
import MapData from "./MapData";
// let city;
// let api = `api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=e83d76c6c3921065eb1dcc65f0dd9b4d`;
// "https://api.openweathermap.org/data/2.5/find?q={city}&appid=5796abbde9106b7da4febfae8c44c232&units=metric"

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);

  async function handleSubmit(e, city) {
    e.preventDefault();
    const api = `https://api.openweathermap.org/data/2.5/find?q=${city}&appid=e83d76c6c3921065eb1dcc65f0dd9b4d&units=metric`;
    const response = await axios.get(api);
    console.log(response.data.list[0]);
    

    setData(response.data.list[0]);
  }

  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e, query)}>
        <input
          type="text"
          placeholder="Enter Your City Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">See Weather Details</button>
      </form>

        {
          data !== null &&
          <MapData data={data}/>
        }
    </>
  );
}

export default App;
