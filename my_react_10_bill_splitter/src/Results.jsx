import React, { useState } from 'react'

function Results({obj}) {
    
  return (
    <>
    <div className="results">
        <p>Total Bill : {obj.totalBill + obj.totalTips}</p>
        <p>Total Tips : {obj.tips}</p>
        <p>Bill per people : {obj.billPerPeople}</p>
    </div>
    </>
  )
}

export default Results