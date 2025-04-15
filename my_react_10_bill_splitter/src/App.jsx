import React, {useState} from "react";
import Form from "./Form";
import Results from "./Results";

function App() {
  // let data = {
  //   bill:1000
  //   tips: 100,
  //   numberOfPeople: 5,
  // };
  // data.billPerPeople = data.totalBill / data.numberOfPeople;
  // console.log(data);
  const [bill, setBill] = useState("")
  const [tips, setTips] = useState("")
  const [totalBill, setTotalBill] = useState("");
  const [people, setPeople] = useState("")
  const [data, setData] = useState({});


  return (
    <>
      <Form setData={setData} bill={bill} setBill={setBill} tips={tips} setTips={setTips} people={people} setPeople={setPeople}/>
      {/* <Results obj={data}/> */}
    </>
  );
}

export default App;
