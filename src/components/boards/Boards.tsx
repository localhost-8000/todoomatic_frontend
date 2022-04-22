import React from 'react';
import BoardCard from './BoardCard';

export default function Boards() {
    return (
        <div className="pt-5">
            <h1 className="text-4xl font-semibold text-dark-gray">My Boards</h1>
            <div className="flex justify-between mt-10">
                <div className="">Filter</div>
                <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white">New</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-between mt-4">
                <BoardCard />
                <BoardCard />
                <BoardCard />
                <BoardCard />
            </div>
        </div>
    );
}
