
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { Task } from '../../types/Task';
import { createTask } from '../../utils/ApiCalls';

export default function CreateTask(props: {boardId: string, closeModalCB: () => void, addTaskCB: (task: Task, add: boolean) => void}) {
    const [task, setTask] = useState<Task>({
        title: "",
        description: "",
        priority: "Low"
    });
    const cancelButtonRef = useRef(null);

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            console.log("Creating task...");
            const data: Task = await createTask(props.boardId, task);
            props.addTaskCB(data, true);
            props.closeModalCB();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-lg divide-y divide-gray-200">
            <h2 className="text-2xl my-2 pl-5">Create New Task</h2>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="mb-4">
                    <label htmlFor="title">Task Name</label>
                    <input 
                        id="title"
                        type="text" 
                        name="title"
                        autoFocus
                        value={task.title}
                        onChange={e => setTask({
                            ...task,
                            title: e.target.value
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description">Description</label>
                    <input 
                        id="description"
                        type="text" 
                        name="description"
                        value={task.description}
                        onChange={e => setTask({
                            ...task,
                            description: e.target.value
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="priority">Status</label>
                    <select 
                        name="status" 
                        id="status" 
                        title="task status"
                        value={task.status}
                        onChange={e => setTask({
                            ...task,
                            status: e.target.value as Task['status']
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg" 
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Done">Done</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </div>
                
                <div className="mb-4">
                    <label htmlFor="priority">Priority</label>
                    <select 
                        name="priority" 
                        id="priority" 
                        value={task.priority}
                        onChange={e => setTask({
                            ...task,
                            priority: e.target.value as Task['priority']
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg" 
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <button type="submit" className="mt-2 w-full py-2 rounded-lg bg-purple-900 text-lg text-white font-semibold hover:bg-light-purple hover:text-dark-purple hover:shadow-lg">Create</button>
                <button
                    type="button"
                    ref={cancelButtonRef}
                    onClick={props.closeModalCB}
                    className="w-full px-6 h-11 mt-4 border-red-400 rounded-lg text-red-400 font-semibold text-lg border-2 hover:text-red-600 hover:border-red-600"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
