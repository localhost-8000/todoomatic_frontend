import React from 'react';
import { Task } from '../../types/Task';

interface TaskCardProps {
    task: Task;
}

export default function TaskCard(props: TaskCardProps) {
    const { task} = props;

    return (
        <div className="w-full bg-gray-400 rounded-lg p-4 my-6">
            <div className="flex justify-between">
                <span className="px-3 py-0.5 bg-gray-300 rounded-lg text-sm font-semibold">{ task.priority }</span>
                <span>...</span>
            </div>
            <h3 className="mt-2 text-xl text-dark-purple font-semibold">{ task.title }</h3>
            <p className="mt-0.5 text-dark-gray">{task.description}</p>
            <div className="flex mt-6">
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-2 z-40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE2NDUxMjExNTU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-4 z-30" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
            </div>
        </div>
        // <Draggable draggableId={task.id} key={task.id} index={index} isDragDisabled={false}>
        //     {(provided, snapshot) => (
        //         <div
        //             ref={provided.innerRef}
        //             {...provided.draggableProps} 
        //             {...provided.dragHandleProps} 
        //             className="w-full bg-gray-400 rounded-lg p-4 my-6" 
        //         >
        //             <div className="flex justify-between">
        //                 <span className="px-3 py-0.5 bg-gray-300 rounded-lg text-sm font-semibold">Low</span>
        //                 <span>...</span>
        //             </div>
        //             <h3 className="mt-2 text-xl text-dark-purple font-semibold">{ task.title }</h3>
        //             <p className="mt-0.5 text-dark-gray">{task.description}</p>
        //             <div className="flex mt-6">
        //                 <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
        //                 <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-2 z-40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE2NDUxMjExNTU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
        //                 <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-4 z-30" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
        //             </div>
        //         </div> 
        //     )}
        // </Draggable>
    );
}
