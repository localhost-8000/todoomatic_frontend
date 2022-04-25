import React from 'react';

import Auth from './components/auth/Auth';
import Topnav from './components/navigation/Topnav';
import Sidebar from './components/navigation/Sidebar';
import { User } from './types/User';


export default function AppContainer(props: { user: User, children: React.ReactNode }) {
    return (
        props.user.username ? (
            <div className="flex flex-col">
                <Topnav />
                <div className="flex">
                    <Sidebar user={props.user}/>
                    <div className="flex-1 min-h-[calc(100vh-4rem)] max-w-[1200px] w-full mx-auto pt-8 px-4">
                        {props.children}
                    </div>
                </div>
            </div>
        ): (
            <Auth />
        )
    );
}
