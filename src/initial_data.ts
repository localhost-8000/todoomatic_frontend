import { DNDData } from "./types/dragNdrop";


export const initialData: DNDData = {
    tasks: {
        "task-1": { id: "task-1", title: "first task", description: "Take out the garbage" },
        "task-2": { id: "task-2", title: "second task", description: "Watch my favorite show" },
        "task-3": { id: "task-3", title: "third task", description: "Charge my phone" },
        "task-4": { id: "task-4", title: "fouth task", description: "Cook dinner" },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To Do",
            taskIds: ["task-1", "task-2", "task-3", "task-4"],
        },
        "column-2": {
            id: "column-2",
            title: "In Progress",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: [],
        },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
}

