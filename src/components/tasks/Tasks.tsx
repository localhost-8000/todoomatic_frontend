import React, { useEffect, useState } from 'react';
import TaskCardContainer from './TaskCardContainer';

import { getAllTasks, getBoard } from '../../utils/ApiCalls';
import { Board } from '../../types/Board';
import Modal from '../common/Modal';
import CreateTask from './CreateTask';
import { Task } from '../../types/Task';
import UpdateBoardName from '../boards/UpdateBoardName';


export default function Tasks(props: {boardId: string}) {
    const [showModal, setShowModal] = useState(false);
    const [editName, setEditName] = useState(false);
    const [boardData, setBoardData] = useState<Board>({
        name: "",
        description: ""
    });
    const [tasks, setTasks] = useState<Task[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Board = await getBoard(props.boardId);
                setBoardData(data);
                const tasks: Task[] = await getAllTasks(props.boardId);
                setTasks(tasks);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [props.boardId]);

    const addOrUpdateTask = (newTask: Task, add: boolean) => {
        if(add) {
            setTasks([
                ...tasks,
                newTask
            ]);
            return;
        }
        setTasks(tasks.map(task => {
            if(task.id === newTask.id) {
                return newTask;
            }
            return task;
        }));
        return;
    }

    // const handleOnDragEnd = (result: any) => {
        
    //     const { destination, source, draggableId } = result;
    //     if(!destination) return;

    //     if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    //     const column = state.columns[source.droppableId];
    //     const newTaskIds = Array.from(column.taskIds);
    //     newTaskIds.splice(source.index, 1);
    //     newTaskIds.splice(destination.index, 0, draggableId);

    //     setState({
    //         ...state,
    //         columns: {
    //             ...state.columns,
    //             [column.id]: {
    //                 ...state.columns[column.id],
    //                 taskIds: newTaskIds
    //             }
    //         }
    //     });
    //     return;
    // }

    const closeModal = () => setShowModal(false);
    const closeEditNameModal = () => setEditName(false);

    return (
        <div className="relative">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold text-dark-gray">{ boardData.name }</h1>
                    <button type="button" className="bg-light-purple rounded-md p-1 px-3 font-semibold text-sm ml-4" onClick={_=> setEditName(true)}>Edit</button>
                </div>
                <div className="flex mt-6">
                    <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                    <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-2 z-40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE2NDUxMjExNTU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                    <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-4 z-30" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                    <div className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-6 flex items-center justify-center text-sm font-bold bg-yellow-400">+2</div>
                </div>
            </div>

            <div className="flex justify-between mt-14">
                <div className="">
                    <button type="button" className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white">Filter</button>
                </div>
                <div className="">
                    <button type="button" onClick={_=> setShowModal(true)} className="border-2 border-dark-purple rounded-md px-8 py-2 text-dark-purple font-semibold text-lg hover:bg-dark-purple hover:text-white">New Task</button>
                </div>
            </div>

            <Modal open={showModal} onCloseCB={closeModal}>
                <CreateTask boardId={props.boardId} closeModalCB={closeModal} addTaskCB={addOrUpdateTask} />
            </Modal>

            <Modal open={editName} onCloseCB={closeEditNameModal}>
                <UpdateBoardName board={boardData} closeModalCB={closeEditNameModal} updateBoardNameCB={(val: string) => setBoardData({...boardData, name: val})} />
            </Modal>

            <div className="flex flex-wrap justify-between mt-12">
                <TaskCardContainer tasks={tasks.filter(t => t.status === "Pending")} columnTitle='Pending' addOrUpdateTaskCB={addOrUpdateTask} />
                <TaskCardContainer tasks={tasks.filter(t => t.status === "In Progress")} columnTitle='In Progress' addOrUpdateTaskCB={addOrUpdateTask} />
                <TaskCardContainer tasks={tasks.filter(t => t.status === "Done")} columnTitle='Done' addOrUpdateTaskCB={addOrUpdateTask} />
                {/* <DragDropContext
                    onDragEnd={handleOnDragEnd}
                >
                    {state.columnOrder.map((columnId: string) => {
                        const column = state.columns[columnId];
                        const tasks = column.taskIds.map((taskId: string) => state.tasks[taskId]);
                        
                        return <TaskCardContainer key={column.id} column={column} tasks={tasks} />;
                    })}
                </DragDropContext> */}
            </div>

        </div>
    );
}
