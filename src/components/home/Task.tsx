import React from 'react';
import TaskList from './TaskList';

export default function Task() {
    return (
        <div className="mt-20">
            <h2 className="text-xl font-bold text-dark-gray">My Tasks</h2>
            <div className="flex justify-start mt-3 border-b-2 border-b-gray-500">
                <a href="/todo" className="text-lg font-semibold text-gray-700 px-4 py-1 mr-4 border-b-4 border-b-dark-purple">To Do</a>
                <a href="/in-progress" className="text-lg font-semibold text-gray-700 px-4 py-1 mx-2">In Progress</a>
                <a href="/done" className="text-lg font-semibold text-gray-700 px-4 py-1">Done</a>
            </div>

            <ul>
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
                <TaskList />
            </ul>
        </div>
    );
}
