import { Board } from "../types/Board";
import { Task } from "../types/Task";
import { User } from "../types/User";

// const API_BASE_URL = "https://todoomatic-backend.herokuapp.com/api/";
const API_BASE_URL = "http://localhost:8000/api/";

type RequestMethod = "GET" | "POST" | "PUT" | "DELETE";


export const request = async (endpoint: string, method: RequestMethod = "GET", data: any = {}) => {
    let url, body;
    if(method === "GET") {
        const requestParams = data ? `?${Object.keys(data).map(key => `${key}=${data[key]}`).join("&")}` : "";
        url = `${API_BASE_URL}${endpoint}${requestParams}`;
        body = null;
    } else {
        url = `${API_BASE_URL}${endpoint}`;
        body = data ? JSON.stringify(data) : null;
    }

    const token = localStorage.getItem("token");
    const auth = token ? `Token ${localStorage.getItem("token")}` : "";

    const response = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: auth 
        },
        body
    });

    if(response.ok) {
        if(method === "DELETE") return "true";

        const json = await response.json();
        return json;
    } else {
        const errorJson = await response.json();
        throw Error(errorJson);
    }
}

export const me = () => {
    return request('users/me/', 'GET', {});
}

export const signUp = (userData: User, password: string) => {
    return request("auth/", "POST", {...userData, password});
}

export const logIn = (userData: any) => {
    return request("auth-token/", "POST", userData);
}

export const getUserTasks = () => {
    return request("users/tasks/", "GET");
}

export const createBoard = (boardData: Board) => {
    return request("boards/", "POST", boardData);
}

export const getBoards = () => {
    return request("boards/", "GET");
}

export const getBoard = (boardId: string) => {
    return request(`boards/${boardId}/`, "GET");
}

export const updateBoard = (boardData: Board) => {
    return request(`boards/${boardData.id}/`, "PUT", boardData);
}

export const createTask = (boardId: string, taskData: Task) => {
    return request(`boards/${boardId}/tasks/`, "POST", taskData);
}

export const getAllTasks = (boardId: string) => {
    return request(`boards/${Number(boardId)}/tasks/`, "GET");
}

export const updateTask = (taskData: Task) => {
    return request(`boards/${Number(taskData.board)}/tasks/${taskData.id}/`, "PUT", taskData);
}

export const getPendingTasks = () => {
    return request(`users/pending/`, "GET");
}