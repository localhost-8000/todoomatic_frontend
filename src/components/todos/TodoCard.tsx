import React, { useState } from 'react';
import { Task } from '../../types/Task';
import Modal from '../common/Modal';
import UpdateTask from '../tasks/UpdateTask';

interface TodoCardProps {
    todo: Task,
    updateTodosCB: (todo: Task) => void;
}

export default function TodoCard(props: TodoCardProps) {
    const [open, setOpen] = useState<boolean>(false);


    const closeModal = () => setOpen(false);

    return (
        <div className="max-w-[350px] w-full bg-light-purple rounded-lg px-6 py-3 my-8 mr-8">
            <div className="flex justify-between items-center">
                <span className="px-3 py-0.5 bg-gray-300 rounded-lg text-sm font-bold">{ props.todo.priority }</span>
                <button type="button" title='Update Todo' className="font-extrabold text-dark-purple w-8 h-8 flex flex-col items-center justify-center hover:bg-gray-300 rounded-full" onClick={_=>setOpen(true)}>
                    <div className="w-1 h-1 rounded-full bg-dark-purple my-0.5"></div>
                    <div className="w-1 h-1 rounded-full bg-dark-purple my-0.5"></div>
                    <div className="w-1 h-1 rounded-full bg-dark-purple my-0.5"></div>
                </button>
            </div>

            <Modal open={open} onCloseCB={closeModal}>
                <UpdateTask task={props.todo} closeModalCB={closeModal} updateTaskCB={props.updateTodosCB} />
            </Modal>

            <h3 className="mt-2 text-xl text-dark-purple font-semibold">{ props.todo.title }</h3>
            <p className="mt-0.5 text-dark-gray">{ props.todo.description }</p>
            <div className="flex mt-6">
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="pic" />
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-2 z-40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE2NDUxMjExNTU&ixlib=rb-1.2.1&q=80&w=1080" alt="pic" />
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-4 z-30" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="pic" />
            </div>
        </div>
    );
}
