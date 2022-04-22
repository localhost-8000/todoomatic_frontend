import React from 'react';

export default function TaskCount() {
    return (
        <div className="w-[30%] h-36 border-2 border-gray-400 rounded-lg flex flex-col justify-between py-4 pl-4">
            <h3 className="text-lg text-dark-gray font-semibold">Completed Tasks</h3>
            <div className="">
                <h2 className="text-xl text-dark-gray font-bold">50</h2>
                <p className="text-gray-700 font-medium">Task Count</p>
            </div>
        </div>
    );
}
