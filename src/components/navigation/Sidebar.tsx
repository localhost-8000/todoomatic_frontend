import React, { useState } from 'react';


const Menus = [
    { title: "Dashboard", link: "/dashboard" },
    { title: "Board", link: "/board" },
    { title: "To Do", link: "/todo" },
]

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    
    return (
        <div className={
            `${open ? "w-72" : "w-24"} sticky top-16 p-5 pt-8 h-[calc(100vh-4rem)] duration-300 bg-dark-purple`
        }>
            <div className="flex gap-x-4 pb-3 items-center border-b-2 border-b-gray-500">
                <img 
                    alt="logo"
                    className="cursor-pointer duration-500 w-12 h-12 rounded-full border-2 border-white"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyM3x8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" 
                />
                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "hidden"}`}>Rahul Tiwari</h1>
            </div>

            <ul className="pt-8">
                { Menus.map((menu, index) => (
                    <li
                        key={index}
                        className="text-gray-300 flex items-center gap-x-4 p-2 my-1 hover:bg-light-white rounded-md cursor-pointer"
                    >
                        {/* <img src="" alt="nn" /> */}
                        <span className={`${!open && "hidden"} origin-left duration-300 font-medium`}>{menu.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
