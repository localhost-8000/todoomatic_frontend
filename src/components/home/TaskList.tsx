import React from 'react';
import { UserTask } from '../../types/Home';

export default function TaskList(props: {task: UserTask}) {
    return (
        <div className="w-full bg-gray-200 py-3 px-5 flex my-4 rounded-lg hover:bg-gray-300">
            <h3 className="text-dark-gray font-semibold">{ props.task.title }</h3>
        </div>
    );
}
