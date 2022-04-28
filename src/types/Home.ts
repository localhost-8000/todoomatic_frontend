export type UserTask = {
    id: number;
    title: string;
    priority: "Low" | "Medium" | "High";
    status: "Pending" | "In Progress" | "Done" | "Cancelled";
}


export type UserTasks = {
    pending: UserTask[];
    progress: UserTask[];
    done: UserTask[];
}