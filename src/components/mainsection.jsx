import React from "react";
import ApiCall from "./apicall";
function MainSection(params) {
  return (
    <>
      <div className=" mt-32 p-6 overflow-y-auto max-h-screen w-4/5 ml-auto pb-28">
        {/* InformationBar */}
        <div className="border border-red-600 rounded-xl  block w-4/5 h-36 p-6">
          <h4 className="text-xl font-bold">
            Welcome to <span className="text-red-600 text-xl">WatchList</span>
          </h4>
          <p className="mt-3">
            Browse Movies,add them to wishlist and share them with friends.
            <br></br>
            <span className="inline w-5">
              Just click the
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 48 48"
                stroke="white"
                stroke-width="4"
                className="inline"
              >
                <path
                  fill="#F44336"
                  d="M37,43l-13-6l-13,6V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4V43z"
                ></path>
              </svg>
            </span>
            icon to add a movie,the poster to see details checked to mark the
            movie as watched
          </p>
        </div>
        <ApiCall />
      </div>
    </>
  );
}
export default MainSection;
