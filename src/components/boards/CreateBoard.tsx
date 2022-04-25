import { navigate } from 'raviger';
import React, { useRef, useState } from 'react';
import { createBoard } from '../../utils/ApiCalls';

export default function CreateBoard(props: {closeModalCB: () => void}) {
    const [board, setBoard] = useState({
        name: "",
        description: ""
    });
    const cancelButtonRef = useRef(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = await createBoard(board);
            navigate(`/boards/${data.id}`);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-lg divide-y divide-gray-200">
            <h2 className="text-2xl my-2 pl-5">Create New Board</h2>
            <form onSubmit={handleSubmit} className="p-5">
                <div className="mb-4">
                    <label htmlFor="title" className={`${board.name ? "text-red-500" : ""}`}>Board Name</label>
                    <input 
                        id="title"
                        type="text" 
                        name="title"
                        autoFocus
                        value={board.name}
                        onChange={e => setBoard({
                            ...board,
                            name: e.target.value
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg"
                    />
                    {/* {errors.title && <p className="text-red-500">{ errors.title }</p> } */}
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className={`${board.description ? "text-red-500" : ""}`}>Description</label>
                    <input 
                        id="description"
                        type="text" 
                        name="description"
                        value={board.description}
                        onChange={e => setBoard({
                            ...board,
                            description: e.target.value
                        })}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg"
                    />
                    {/* {errors.description && <p className="text-red-500">{ errors.description }</p> } */}
                </div>
                {/* <div className="mb-4">
                    <input 
                        id="is_public"
                        type="checkbox" 
                        name="is_public"
                        value={form.is_public ? "true" : "false"}
                        onChange={e => setForm({
                            ...form,
                            is_public: e.target.checked
                        })}
                        className="w-[14px] h-[14px] my-2 mr-2 border-2 border-gray-200 rounded-lg"
                    />
                    <label htmlFor="is_public" className={`${errors.is_public ? "text-red-500" : ""}`}>Is Public</label>
                    {errors.is_public && <p className="text-red-500">{ errors.is_public }</p> }
                </div> */}

                <button type="submit" className="mt-2 w-full py-2 rounded-lg bg-purple-900 text-lg text-white font-semibold hover:bg-light-purple hover:text-dark-purple hover:shadow-lg">Create</button>
                <button
                    type="button"
                    ref={cancelButtonRef}
                    onClick={props.closeModalCB}
                    className="w-full px-6 h-11 mt-4 border-red-400 rounded-lg text-red-400 font-semibold text-lg border-2 hover:text-red-600 hover:border-red-600"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
}
