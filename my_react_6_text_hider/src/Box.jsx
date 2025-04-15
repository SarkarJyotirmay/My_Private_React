import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

function Box() {
  const [showText, setShowText] = useState(true);

  function handleClick() {
    setShowText(!showText);
  }

  return (
    <div className="box border-2 border-amber-400 w-1/4 flex flex-col gap-2 px-2">
      <h2 className="flex justify-between items-center text-2xl font-semibold">
        Lorem ipsum dolor sit.
        
        <RiArrowDownSLine
          className={`cursor-pointer transition-all duration-500 
            ${showText ? "" : "rotate-180  "}`}
          onClick={handleClick}
        />
      </h2>

      {showText && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          dicta ipsam pariatur cupiditate, repellat consequuntur.
        </p>
      )}
    </div>
  );
}

export default Box;
