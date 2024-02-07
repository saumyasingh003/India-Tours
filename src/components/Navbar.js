import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { BsCaretDownFill, BsList } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Incredible India";
  });

  window.addEventListener("scroll", () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);
  });

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const subsections = ["Login", "Register", "Dashboard"];

  return (
    <div className="">
      <nav
        className={
          scroll
            ? "navbar-scroll  z-30 delay-50"
            : "bg-[#1F2937] text-white border-gray-200 dark:bg-gray-900"
        }
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 ">
          <a  href="/#" className="flex items-center">
          <div className="bg-white rounded-[100px]  ">

            <img
              src={require("../assets/logo.jpg")}
              className="h-16 w-16 "
              alt=""
            />
          </div>
            <span
              className="self-center ml-3 text-2xl font-semibold whitespace-nowrap dark:text-white"
            >
              <Typewriter
                options={{
                  strings: ["!ndiaTours"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMobileMenu} // Add this line to toggle mobile menu
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <BsList size={24} /> {/* Hamburger icon */}
          </button>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex w-full  md:w-auto`} // Show/hide mobile menu
            id="navbar-default"
          >
            <ul
              
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li className="hover:tracking-wider">
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white text-xl bg-blue-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-900"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="block py-2  px-1 pl-3 pr-4 text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              {/* <li>
                <a
                  href="/Gallery"
                  className="block py-2 pl-3 pr-4 text-gray-900 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Gallery
                </a>
              </li> */}
            </ul>
            <div
              className={`dropdown px-5 flex text-white text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                isDropdownOpen ? "open" : ""
              }`}
            >
              <button
                onClick={toggleDropdown}
                className="flex items-center"
               
              >
                Account{" "}
                <span className="pt-1 pl-2">
                  <BsCaretDownFill size={12} />
                </span>
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content p-3 space-y-4 text-center bg-[#dcdbda7c] rounded-lg">
                  {subsections.map((subsection, index) => (
                    <a
                      key={index}
                      href="/Login"
                      className="block py-2 pl-3 pr-4 text-gray-900 
                      text-xl rounded-md hover:p-2  md:border-0
                       md:hover:text-blue-700 md:p-0 dark:text-white
                        md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                         dark:hover:text-white md:dark:hover:bg-transparent
                          hover:bg-white"
                    >
                      {subsection}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
