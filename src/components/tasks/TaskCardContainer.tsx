import React from 'react';
import { _getTaskEmoji } from '../../utils/task_utils';
import TaskCard from './TaskCard';
import { Task } from '../../types/Task';

interface TaskCardContainerProps {
    columnTitle: string;
    tasks: Task[];
    addOrUpdateTaskCB: (task: Task, add: boolean) => void;
}

const comparatorFunction = (task1: Task, task2: Task) => {
    if(task1.priority === "Low") return 1;
    else if(task1.priority === "Medium" && (task2.priority === "Medium" || task2.priority === "High")) return 1;
    else if(task1.priority === "High" && task2.priority === "High") return 1;
    return -1;
}


export default function TaskCardContainer(props: TaskCardContainerProps) {
    const { columnTitle, tasks, addOrUpdateTaskCB } = props;

    return (
        <div className="max-w-[350px] w-full bg-gray-200 rounded-lg px-6 py-3 my-8 mr-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold text-dark-purple flex">{_getTaskEmoji(columnTitle)} {columnTitle} <span className="flex items-center justify-center text-sm rounded-full bg-gray-400 w-6 h-6 ml-2 relative -bottom-[3px]">{ tasks.length }</span></h2>
                {columnTitle === "To Do" && <div className="bg-gray-400 rounded-md px-1 font-extrabold text-dark-purple text-xl">+</div>}
            </div>
            <p className="h-1 w-full bg-dark-purple my-3"></p>
            {tasks.length === 0 && <p className="text-center text-xl font-bold text-dark-purple">No tasks yet!</p>}
            {tasks.sort(comparatorFunction).map((task: Task, index: number) => (
                <TaskCard key={task.id} task={task} updateTaskCB={addOrUpdateTaskCB} />
            ))}
            {/* <Droppable droppableId={column.id} type='TASK'>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} key={column.id}>
                        {tasks.length === 0 && <p className="text-center text-xl font-bold text-dark-purple">No tasks yet!</p>}
                        {tasks.map((task: DNDTask, index: number) => (
                            <TaskCard key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable> */}
        </div>

    );
}
