export type DNDColumn = {
    id: string;
    title: "To Do" | "In Progress" | "Done";
    taskIds: string[];
}

export type DNDTask = {
    id: string;
    title: string;
    description: string;
}

export type DNDData = {
    columnOrder: string[],
    columns: {
        [key: string]: DNDColumn
    },
    tasks: {
        [key: string]: DNDTask
    }
}