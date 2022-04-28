import React, { useState } from 'react';
import { UserTasks } from '../../types/Home';
import TaskList from './TaskList';

export default function Task(props: {userTasks: UserTasks}) {
    const [active, setActive] = useState<"pending" | "progress" | "done">("pending");


    const returnList = () => {
        let tasks;
        switch(active) {
            case "done": 
                tasks = props.userTasks["done"];
                break;

            case "progress": 
                tasks = props.userTasks["progress"];
                break;
            
            default: 
                tasks = props.userTasks["pending"];
                break;
        }

        if(tasks.length === 0) {
            return (
                <h1 className="text-xl text-red-500 font-semibold mt-4 ml-2">No Tasks!!</h1>
            )
        }

        return (
            tasks.map(task => (
                <TaskList task={task} key={task.id} />
            ))
        );
    }

    return (
        <div className="mt-20">
            <h2 className="text-xl font-bold text-dark-gray">My Tasks</h2>
            <div className="flex justify-start mt-3 border-b-2 border-b-gray-500">
                <button type="button" className={`text-lg font-semibold text-gray-700 px-4 py-1 mr-4 ${active === "pending" && "border-b-4 border-b-dark-purple"}`} onClick={_=> setActive("pending")}>To Do</button>
                <button type="button" className={`text-lg font-semibold text-gray-700 px-4 py-1 mx-2 ${active === "progress" && "border-b-4 border-b-dark-purple"}`} onClick={_=> setActive("progress")}>In Progress</button>
                <button type="button" className={`text-lg font-semibold text-gray-700 px-4 py-1 ${active === "done" && "border-b-4 border-b-dark-purple"}`} onClick={_=> setActive("done")}>Done</button>
            </div>

            <ul>
                {returnList()}
            </ul>
        </div>
    );
}
