import React from "react";
import { PiHamburgerBold } from "react-icons/pi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container h-[300px] bg-red-500 flex flex-col justify-center items-center gap-8">

        {/* div - 1 */}
        <div className="">
          <h1 className="text-2xl  font-semibold flex justify-center items-center gap-2">
            <PiHamburgerBold />
            logoipsum
          </h1>
        </div>

        {/* div - 2 */}
        <div className="w-1/3 text-center">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            consequuntur amet culpa cum itaque neque.
          </p>
        </div>

        {/* div - 3 */}
        <div>
          <ul className="flex justify-center items-center gap-4">
            <li className=" hover:text-gray-800">
              <Link to="/">Aboout</Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">Career</Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">History</Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">Services</Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">Projects</Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* div - 4 */}
        <div className="">
          <ul className="flex justify-center items-center gap-4">
            <li className=" hover:text-gray-800">
              <Link to="/">
                <FaFacebook />
              </Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">
                <FaInstagram />
              </Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">
                <FaTwitter />
              </Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">
                <FaGithub />
              </Link>
            </li>
            <li className=" hover:text-gray-800">
              <Link to="/">
                <FaDribbble />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;