import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  function trimContent(input, length) {
    return input.length > length
      ? input.split(" ").slice(0, length).join(" ") + "..."
      : input;
  }

  return (
    <div className="product w-[23%] h-72 p-2 rounded-lg bg-white flex flex-col justify-between items-center ">
      <Link to={`/product/${product.id}`} className="w-[80%] h-[60%]">
      <img src={product.image} alt="" className="w-full h-full " />
      </Link>
      <div className="">
        <h3 className="font-semibold text-gray-500">{trimContent(product.title, 5)}</h3>
        <p className="text-xl font-bold text-">
          ${product.price}
        </p>
      </div>
    </div>
  );
}

export default Product;
