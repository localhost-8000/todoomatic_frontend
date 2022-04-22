import React from 'react';
import Auth from './components/auth/Auth';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Boards from './components/boards/Boards';
import Home from './components/home/Home';

import Sidebar from './components/navigation/Sidebar';
import Topnav from './components/navigation/Topnav';
import Tasks from './components/tasks/Tasks';
import Todos from './components/todos/Todos';


function App() {
    return (
        <div className="flex flex-col">
            <Topnav />
            <div className="flex">
                <Sidebar />
                <div className="flex-1 min-h-[calc(100vh-4rem)] max-w-[1200px] w-full mx-auto pt-8 px-4">
                    {/* <Tasks /> */}
                    <Todos />
                </div>
            </div>
        </div>
    );
}

export default App;
