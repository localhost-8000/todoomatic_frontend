import { useRoutes } from "raviger";
import { useEffect, useState } from "react";
import AppContainer from "../AppContainer";
import Auth from "../components/auth/Auth";
import Boards from "../components/boards/Boards";

import Home from "../components/home/Home";
import Tasks from "../components/tasks/Tasks";

import { me } from "../utils/ApiCalls";
import { User } from "../types/User"
import Todos from "../components/todos/Todos";


const authenticated_routes = {
    "/": () => <Home />, 
    "/boards": () => <Boards />,
    "/boards/:boardId": ({boardId}: {boardId: string}) => <Tasks boardId={boardId}/>,
    "/boards/:boardId/tasks/:taskId": () => <Boards />,
    "/todos": () => <Todos />
};

const unauthenticated_routes = {
    "/auth": () => <Auth />,
}

export default function AppRouter() {
    const [user, setUser] = useState<User>({
        name: "",
        username: "",
        photoURL: ""
    });
    const routes = useRoutes({...authenticated_routes, ...unauthenticated_routes});

    useEffect(() => {
        const getUser = async () => {
            const user = await me();
            setUser(user);
        }
        getUser();
    }, []);

    return (
        <AppContainer user={user}>
            {routes}
        </AppContainer>
    )
}