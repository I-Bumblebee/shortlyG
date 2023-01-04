import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom"
import {FcMenu} from "react-icons/fc";
import {FaSignOutAlt} from "react-icons/fa"
import { useUser } from "../App";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const {user, setUser} = useUser();


    return (
      <>
        <div className="w-full h-28 items-center lg:flex px-[20px] md:px-24 hidden bg-white z-[100] shadow-sm">
          <div className="flex mt-6 w-full text-md  font-bold font-poppins">
            <Link to="/">
              <div className="bg-[url('./assets/logo.svg')] w-[121px] bg-cover h-[32px] bg-no-repeat mr-8"></div>
            </Link>
            <div className="w-full flex justify-between mt-[3px]">
              <div className="flex text-[#bfbfbf]">
                <NavLink
                  exact
                  to="/features"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black mr-6 "
                      : "text-[#bfbfbf] mr-6 hover:text-black"
                  }
                >
                  {" "}
                  Features{" "}
                </NavLink>
                <NavLink
                  exact
                  to="/pricing"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black mr-6 "
                      : "text-[#bfbfbf] mr-6 hover:text-black"
                  }
                >
                  {" "}
                  Pricing{" "}
                </NavLink>
                <NavLink
                  exact
                  to="/resources"
                  className={({ isActive }) =>
                    isActive
                      ? "text-black mr-6 "
                      : "text-[#bfbfbf] mr-6 hover:text-black"
                  }
                >
                  {" "}
                  Resources{" "}
                </NavLink>
              </div>
              <div className="flex md:mr-8">
                {user ? (
                  <>
                    <Link
                      to="/account"
                      className="hover:animate-pulse hover:scale-125 transition duration-150  mr-2 text-[#35323e]"
                    >
                      {user.username}
                    </Link>
                    <button
                      onClick={() => {
                        setUser(null);
                        localStorage.clear();
                      }}
                      className="scale-150 ml-3 pb-1 hover:scale-[2] transition duration-100  "
                    >
                      <FaSignOutAlt />
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/signin"
                      className={({ isActive }) =>
                        isActive
                          ? "mr-6 text-black "
                          : "mr-6 text-[#bfbfbf] hover:text-black "
                      }
                    >
                      {" "}
                      Login{" "}
                    </NavLink>
                    <Link
                      to="/signup"
                      className="text-white bg-[#2acfcf] px-6 py-2 mt-[-8px] rounded-full hover:bg-[#2acfcf]/40 hover:drop-shadow-xl hover:shadow-[#2acfcf]"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-8 lg:hidden w-full h-22 py-7 relative ">
          <Link to="/">
            <div className="bg-[url('./assets/logo.svg')] w-[121px] bg-cover h-[32px] bg-no-repeat mr-8 "></div>
          </Link>
          <button onClick={() => setOpen(!open)}>
            <FcMenu className="scale-[2.5] scale-x-[2.2]" />
          </button>
          <ul
            onClick={() => setOpen(false)}
            className={` ${
              open ? "flex flex-col items-center" : "hidden"
            } absolute w-[86%] py-10 left-[7%] rounded-[0.6rem] bg-[#3b3054] top-20 text-white text-lg  font-poppins gap-y-6 font-bold tracking-wider`}
          >
            <li>
              <Link to="/features" className="">
                {" "}
                Features{" "}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="">
                {" "}
                Pricing{" "}
              </Link>
            </li>
            <li>
              <Link to="/resources" className="">
                {" "}
                Resources{" "}
              </Link>
            </li>
            <li className="w-full my-2">
              <div className="w-full h-full flex justify-center">
                <hr className="border-1 m-0 w-[90%] border-white/20" />
              </div>
            </li>
            <li>
              {!user ? (
                <Link to="/signin" className=" ">
                  {" "}
                  Login{" "}
                </Link>
              ) : (
                <Link to="/account" className=" ">
                  {" "}
                  Account{" "}
                </Link>
              )}
            </li>
            <li className="w-full">
              {!user ? (
                <Link to="/signup" className="w-full">
                  <div className="w-full h-full flex justify-center">
                    <button className="text-white bg-[#2acfcf]  w-[90%] py-3 rounded-full ">
                      {" "}
                      sign Up
                    </button>
                  </div>
                </Link>
              ) : (
                <div className="w-full h-full flex justify-center">
                  <button
                    className="text-white bg-[#2acfcf]  w-[90%] py-3 rounded-full "
                    onClick={() => {
                      setUser(null);
                      localStorage.clear();
                    }}
                  >
                    {" "}
                    Log Out
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </>
    );
};

export default Navbar;