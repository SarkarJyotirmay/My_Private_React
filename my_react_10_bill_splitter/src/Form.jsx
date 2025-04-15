import React from "react";

function Form({ setData, bill, setBill, tips, setTips, people, setPeople }) {
  return (
    <>
      <div className="inputs">
        <input type="number" placeholder="Enter Bill Amount" />
        <label htmlFor="tips">Select Tip percentage</label>
        <div id="tips">
          <p>5</p>
          <p>10</p>
          <p>15</p>
          <p>20</p>
          <p>25</p>
          <p>30</p>
        </div>

        <input type="number" placeholder="Enter Custom Tip Amount in Rupees" />

        <input type="number" placeholder="Enter Number of people" />

        <button
          onClick={setData((prev) => {
            return { bill: bill, tips: tips, total };
          })}
        >
          Split
        </button>
      </div>
    </>
  );
}

export default Form;
