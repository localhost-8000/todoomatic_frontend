import React from 'react';
import Task from './Task';
import TaskCount from './TaskCount';

export default function Home() {
    return (
        <div className="">
            <p className="text-gray-700 font-medium">{ (new Date()).toDateString() }</p>
            <h2 className="text-3xl text-dark-gray font-bold">Hello Rahul</h2>

            <div className="flex justify-between mt-14">
                <TaskCount />
                <TaskCount />
                <TaskCount />
            </div>

            <Task />
        </div>
    );
}
