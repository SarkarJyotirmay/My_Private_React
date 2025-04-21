import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFreebsdDevil } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

function Header() {
  return (
    <>
      <div className="h-17 px-8  bg-red-500 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold flex gap-2 items-center">
            <IoLogoFreebsdDevil />
            Logo
          </h1>
        </Link>
        <div className="">
          <ul className="flex gap-8 items-center text-white font-semibold text-lg ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li className="relative">
              <Link to="/wishlist" className="text-2xl">
                <FaRegHeart />
              </Link>
              <span className="w-5 h-5 rounded-full bg-gray-300 text-black text-sm font-semibold flex justify-center items-center absolute -top-3 -right-4 shadow-md">
                0
              </span>
            </li>
            <li className="relative text-xl font-bold">
              <Link to="/cart">
                <BsCart3 />
              </Link>
              <span className="w-5 h-5 rounded-full bg-gray-300 text-black text-sm font-semibold flex justify-center items-center absolute -top-3 -right-4 shadow-md">
                0
              </span>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
