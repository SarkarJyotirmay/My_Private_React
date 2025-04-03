import { MyDetails } from "./Details.jsx";

const App = () =>{
  return (
    <>
      <h1>Hello World</h1>
      <MyDetails name="Jyotirmay" age={23} hobby={["Cricket", " Code"]} />
    </>
  )
}

export  {App};