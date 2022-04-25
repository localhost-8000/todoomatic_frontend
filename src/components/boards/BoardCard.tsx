import { Link } from 'raviger';
import React from 'react';
import { Board } from '../../types/Board';

export default function BoardCard(props: {boardData: Board}) {

    return (
        <Link href={`/boards/${props.boardData.id}`} className="max-w-[350px] w-full bg-light-purple rounded-lg px-6 py-4 my-8 mr-4 hover:shadow-lg">
            <h2 className="text-xl font-bold text-dark-purple">{ props.boardData.name }</h2>
            <p className="font-medium my-2">{ props.boardData.description }</p>
            <div className="flex mt-6">
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover z-50" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-2 z-40" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwyMHx8cHJvZmlsZXxlbnwwfHx8fDE2NDUxMjExNTU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
                <img className="w-8 h-8 rounded-full border-2 border-dark-purple object-cover relative -left-4 z-30" src="https://images.unsplash.com/photo-1644982647711-9129d2ed7ceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOXx8cHJvZmlsZXxlbnwwfHx8fDE2NTAxMDM0MjU&ixlib=rb-1.2.1&q=80&w=1080" alt="profile pic" />
            </div>
        </Link>
    );
}
