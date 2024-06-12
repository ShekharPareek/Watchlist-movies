import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'

function RegisterEmail() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const getEmail = localStorage.getItem('User');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store email in localStorage and navigate to the home page
        localStorage.setItem('User', email);
        window.location.reload();
        navigate('/home');
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <>
            {getEmail ? (
                <Outlet />
            ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-xl bg-slate-100 my-[128px] mx-auto rounded-lg shadow-xl p-6">
                    <div className="text-red-600 text-4xl block font-bold tracking-tighter text-center mt-2 mb-3">
                        WATCHLIST APPLICATION
                    </div>

                    <h2 className="text-4xl text-center tracking-tight mb-4">
                        Register Your Email
                    </h2>

                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-full px-3 mb-6">
                            <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                                required
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="w-full md:w-full px-3 mb-6">
                            <button
                                className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
                                type="submit"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}

export default RegisterEmail;
