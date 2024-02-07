import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-hidden relative mb-1">
      <img
        className="h-[95vh] w-screen opacity-50  bg-transparent rounded-xl" alt=" "
        
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex justify-center   items-center h-screen">
          <div
            data-aos="zoom-in-up"
            className=" rounded-3xl"
            
          >
            <div
              className="sm:w-[25vw] h-fit max-w-md p-8 space-y-3  rounded-3xl justify-center
        shadow-xl shadow-gray-100 dark:text-gray-100"
            >
              <h1 className="text-2xl font-bold text-center">Get Started</h1>
              <form novalidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                 
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                 
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="sm:w-[20vw] px-4 py-2 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <div className="space-y-1 text-sm">
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="sm:w-[20vw] px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                  />
                </div>
                <button className="block sm:w-[20vw] p-3 text-center  bg-blue-300  rounded-md  dark:text-gray-900 dark:bg-violet-400">
                  Create an Account
                </button>
              </form>

              <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                Already have a Account?
                <a
                  rel="noopener noreferrer"
                  href="/Login"
                  className="underline  dark:text-gray-100"
                >
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
