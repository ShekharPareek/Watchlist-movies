import React from "react";

function Header() {
    return (
        <>
        {/* Header */}
            <div style={{ zIndex: "1" }} className=' fixed w-full top-0 left-0  text-center bg-slate-100 shadow-lg text-gray-400 p-5'><input className='w-1/2 p-2 rounded-2xl text-center focus:outline-none focus:ring focus:border-red-500' type="text" placeholder='www.Yourwebsite.com' /><button></button></div>

        </>
    )
}

export default Header;