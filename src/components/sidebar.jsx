import React, { useState } from "react";
import {NavLink} from 'react-router-dom'
import Logouticon from "../assets/icons8-logout-100.png";
import CallApi from "./apicall";
import { Outlet, useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const ToolBar = () => {
    setIsVisible(!isVisible);
  };

  const HandelSignout = () => {
    localStorage.clear();
    window.location.reload();
    CallApi();
  };
  return (
    // SideBar
    <div className="fixed top-0 h-screen left-0 flex flex-col flex-shrink-0 antialiased bg-gray-50 text-gray-800  shadow-xl pl-3">
      <div className="flex flex-col w-64 bg-white h-full border-r mt-20">
        <div className="flex items-center justify-center h-14">
          <div>
            <h1 className="text-red-500 text-2xl font-bold pb-2">WatchLists</h1>
          </div>
        </div>
        <div className="w-full pr-3 pb-7">
          <input
            type="text"
            placeholder="Search"
            className="outline-red-400 p-1 border-gray-300 border rounded-lg w-full"
          />
        </div>
        <div className="overflow-y-auto overflow-x-hidden flex-grow pr-3">
          <div className="border-b pb-3">
            <ul>
            <NavLink
             to="/"
               className={({ isActive }) => `
               hover:bg-red-500 text-gray-600 hover:text-white 
               relative flex flex-row items-center h-11 focus:outline-none
               border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer rounded-lg
               ${isActive ? "bg-red-500" : "bg-white"} 
               ${isActive ? "text-white" : "text-gray-600"}
             `}
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Home
                </span>
              </NavLink>
            </ul>
          </div>
          <div className="flex items-center w-full">
            <NavLink to='/mylist' className={({ isActive }) => `
               hover:bg-red-500 text-gray-600 hover:text-white 
               relative flex flex-row items-center h-11 focus:outline-none
               border-l-4 border-transparent hover:border-blue-500 pr-6 cursor-pointer rounded-lg w-full pl-4
               ${isActive ? "bg-red-500" : "bg-white"} 
               ${isActive ? "text-white" : "text-gray-600"}
             `}>
              My Lists
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" h-20 p-2 bg-white relative">
        <div className="border p-1 w-3/4 block m-auto rounded-lg">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white mr-2"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          ></img>
          <span className="text-sm text-gray-600">Guest</span>
          <span onClick={ToolBar} id="three_dots"></span>
          <div
            style={{ display: isVisible ? "block" : "none" }}
            className="bg-red-500 w-28 h-8 rounded-md text-white pl-3 pt-1 shadow-xl absolute left-36 top-[-13px] none"
          >
            <ul>
              <li onClick={HandelSignout} className="flex gap-2 cursor-pointer">
                <img className="h-5 w-auto" src={Logouticon} alt="" />
                Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
