import React from 'react';
import TodoCard from './TodoCard';

export default function Todos() {
    return (
        <div className="pt-5">
            <h1 className="text-4xl font-bold text-dark-gray">My ToDos</h1>
            <div className="flex justify-between mt-10">
                <div className="">Filter</div>
                <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white">New Todo</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-start mt-4">
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
}
