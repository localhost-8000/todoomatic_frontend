import { Board } from "../types/Board";

export type Task = {
    id?: number;
    title: string;
    board?: Board;
    completed?: boolean;
    description?: string;
    priority: "Low" | "Medium" | "High";
    status?: "Pending" | "In Progress" | "Done" | "Cancelled";
}