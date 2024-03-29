import React from 'react';

export default function Topnav() {

    const logoutUser = () => {
        localStorage.removeItem("token");
        window.location.href = "/auth";
    }

    return (
        <div className="sticky top-0 h-16 w-full bg-dark-purple flex items-center justify-between z-100">
            <div className="flex">
                <div className="w-72 h-full flex items-center justify-center">
                    <span className="text-white text-2xl font-semibold">TodooMatic</span>
                </div>
                <div className="pl-4">
                    <input 
                        type="text"
                        placeholder="Search anything..."
                        className="bg-gray-200 w-72 rounded-md text-[16px] text-gray-800 py-1 px-4 placeholder:text-gray-600 focus:outline-0" 
                    />
                </div>

            </div>
            <div className="h-full flex items-center mr-8">
                <button type="submit" onClick={logoutUser} className="text-white text-lg font-medium px-3 py-1 hover:bg-gray-100 hover:text-dark-purple rounded-md transition">Logout</button>
            </div>
        </div>    
    );
}
