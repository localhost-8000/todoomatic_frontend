import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { User } from '../../types/User';
import { me } from '../../utils/ApiCalls';
import Task from './Task';
import TaskCount from './TaskCount';

export default function Home() {
    const [user, setUser] = useState<User>({
        name: "",
        username: ""
    });

    useEffect(() => {
        const fetchUser = async() => {
            try {
                const data: User = await me();
                setUser(data);
            } catch(error) {
                console.log(error);
            }
        }
        fetchUser();
    }, []);


    return (
        <div className="">
            <p className="text-gray-700 font-medium">{ (new Date()).toDateString() }</p>
            <h2 className="text-3xl text-dark-gray font-bold">Hello {user.name}</h2>

            <div className="flex justify-between mt-14">
                <TaskCount />
                <TaskCount />
                <TaskCount />
            </div>

            <Task />
        </div>
    );
}
