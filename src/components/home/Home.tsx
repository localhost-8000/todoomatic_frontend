import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserTasks } from '../../types/Home';
import { User } from '../../types/User';
import { getUserTasks, me } from '../../utils/ApiCalls';
import Task from './Task';
import TaskCount from './TaskCount';

export default function Home() {
    const [user, setUser] = useState<User>({
        name: "",
        username: ""
    });

    const [userTasks, setUserTasks] = useState<UserTasks>({
        pending: [],
        progress: [],
        done: []
    });

    useEffect(() => {
        const fetchUserAndTasks = async() => {
            try {
                const data: User = await me();
                setUser(data);
                const userTaskData: UserTasks = await getUserTasks();
                setUserTasks(userTaskData);
            } catch(error) {
                console.log(error);
            }
        }
        fetchUserAndTasks();
    }, []);


    return (
        <div className="">
            <p className="text-gray-700 font-medium">{ (new Date()).toDateString() }</p>
            <h2 className="text-3xl text-dark-gray font-bold">Hello {user.name}</h2>

            <div className="flex justify-between mt-14">
                <TaskCount taskCount={userTasks.pending.length} title="Pending" />
                <TaskCount taskCount={userTasks.progress.length} title="In Progress" />
                <TaskCount taskCount={userTasks.done.length} title="Completed" />
            </div>

            <Task userTasks={userTasks} />
        </div>
    );
}
