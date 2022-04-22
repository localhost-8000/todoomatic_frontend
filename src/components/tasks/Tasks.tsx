import React from 'react';
import TaskCardContainer from './TaskCardContainer';

import { DragDropContext } from "react-beautiful-dnd";
import { initialData } from '../../initial_data';


export default function Tasks() {
    const [state, setState] = React.useState(initialData);

    const handleOnDragEnd = (result: any) => {
        console.log("result: ", result);
        
        const { destination, source, draggableId } = result;
        if(!destination) return;

        if(destination.droppableId === source.droppableId && destination.index === source.index) return;

        const column = state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        setState({
            ...state,
            columns: {
                ...state.columns,
                [column.id]: {
                    ...state.columns[column.id],
                    taskIds: newTaskIds
                }
            }
        });
        return;
    }

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold text-dark-gray">Mobile System</h1>
                    <div className="bg-light-purple rounded-md p-1 px-3 font-semibold text-sm ml-4">Edit</div>
                </div>
                <div className="flex mt-6">
                    <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                    <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-2 z-40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE2NDUxMjExNTU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                    <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-4 z-30" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                    <div className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-6 flex items-center justify-center text-sm font-bold bg-yellow-400">+2</div>
                </div>
            </div>

            <div className="flex justify-between mt-10">
                <div className="">Filter</div>
                <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white">New Task</button>
                </div>
            </div>

            <div className="flex flex-wrap justify-between mt-4">
                <DragDropContext
                    onDragEnd={handleOnDragEnd}
                >
                    {state.columnOrder.map((columnId: string) => {
                        const column = state.columns[columnId];
                        const tasks = column.taskIds.map((taskId: string) => state.tasks[taskId]);
                        
                        return <TaskCardContainer key={column.id} column={column} tasks={tasks} />;
                    })}
                </DragDropContext>
            </div>
        </div>
    );
}
