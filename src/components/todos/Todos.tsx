import { FilterAltOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Task } from '../../types/Task';
import { getPendingTasks } from '../../utils/ApiCalls';
import Loading from '../common/Loading';
import TodoCard from './TodoCard';

export default function Todos() {
    const [todos, setTodos] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);
                const data:Task[] = await getPendingTasks();
                setTodos(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchTodos();
    }, []);

    const updateTodos = (newTask: Task) => {
        setTodos(todos.map(todo => {
            if(todo.id === newTask.id) return newTask;
            return todo;
        }));
    }


    return (
        <div className="pt-5">
            <h1 className="text-4xl font-bold text-dark-gray">My ToDos</h1>
            <div className="flex justify-between mt-10">
                <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white"><FilterAltOutlined name='FilterAltOutlinedIcon' fontSize="small" color="inherit" /> Filter</button>
                </div>
                {/* <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white">New Todo</button>
                </div> */}
            </div>

            <div className="flex flex-wrap justify-start mt-4">
                {loading ? <Loading /> : 
                todos.map(todo => (
                    <TodoCard key={todo.id} todo={todo} updateTodosCB={updateTodos} />
                ))}
            </div>
        </div>
    );
}
