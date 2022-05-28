import { ActiveLink } from 'raviger';
import React from 'react';
import { User } from '../../types/User';


const Menus = [
    { title: "Dashboard", link: "/" },
    { title: "Board", link: "/boards" },
    { title: "To Do", link: "/todos" },
]

export default function Sidebar(props: {user: User}) {
    
    return (
        <div className={
            `w-72 sticky top-16 p-5 pt-8 h-[calc(100vh-4rem)] duration-300 bg-dark-purple`
        }>
            <div className="flex gap-x-4 pb-3 items-center border-b-2 border-b-gray-500">
                <img 
                    alt="logo"
                    className="cursor-pointer duration-500 w-12 h-12 rounded-full border-2 border-white object-cover"
                    src={`${props.user.photoURL}`} 
                />
                <h1 className={`text-white origin-left font-medium text-xl duration-300`}>{ props.user.name }</h1>
            </div>

            <div className="pt-6">
                { Menus.map(menu => (
                    <ActiveLink
                        key={menu.link}
                        href={menu.link}
                        className="text-gray-300 flex items-center p-2 my-2 hover:bg-light-white rounded-md cursor-pointer"
                        exactActiveClass="bg-gray-200 text-gray-800 hover:bg-gray-200"
                    >
                        {/* <img src="" alt="nn" /> */}
                        <span className="origin-left duration-300 font-medium text-lg">{menu.title}</span>
                    </ActiveLink>
                ))}
            </div>
        </div>
    );
}
