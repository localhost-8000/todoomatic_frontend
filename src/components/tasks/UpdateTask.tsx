import React, { useRef, useState } from 'react';
import { Task } from '../../types/Task';
import { updateTask } from '../../utils/ApiCalls';

export default function UpdateTask(props: {task: Task, closeModalCB: () => void, updateTaskCB: (task: Task, add: boolean) => void}) {
    const [newTask, setNewTask] = useState<Task>(props.task);
    const cancelButtonRef = useRef(null);
    
    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data: Task = await updateTask(newTask);
            props.updateTaskCB(data, false);
            props.closeModalCB();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="w-full max-w-lg divide-y divide-gray-200">
            <h2 className="text-2xl my-2 pl-5">Update task</h2>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="mb-4">
                    <label htmlFor="title">Task title</label>
                    <input 
                        id="title"
                        type="text" 
                        name="title"
                        autoFocus
                        value={newTask.title}
                        onChange={e => setNewTask({
                            ...newTask, 
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
                        value={newTask.description}
                        onChange={e => setNewTask({
                            ...newTask,
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
                        value={newTask.status}
                        onChange={e => setNewTask({
                            ...newTask,
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
                        value={newTask.priority}
                        onChange={e => setNewTask({
                            ...newTask,
                            priority: e.target.value as Task['priority']
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg" 
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>

                <button type="submit" className="mt-2 w-full py-2 rounded-lg bg-purple-900 text-lg text-white font-semibold hover:bg-light-purple hover:text-dark-purple hover:shadow-lg">Update</button>
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
