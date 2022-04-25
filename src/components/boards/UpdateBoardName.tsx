import React, { useState } from 'react';
import { useRef } from 'react';

export default function UpdateBoardName(props: {closeModalCB: () => void}) {
    const [error, setError] = useState(false);
    const [boardName, setBoardName] = useState('');
    const cancelButtonRef = useRef(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full max-w-lg divide-y divide-gray-200">
            <h2 className="text-2xl my-2 pl-5">Change Board Name</h2>
            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-4">
                    <label htmlFor="name" className={`${error ? "text-red-500" : ""}`}>Board Name</label>
                    <input 
                        id="name"
                        type="text" 
                        name="name"
                        autoFocus
                        value={boardName}
                        onChange={e => setBoardName(e.target.value)}
                        className="w-full p-2 my-2 border-2 border-gray-200 rounded-lg"
                    />
                    {/* {errors.title && <p className="text-red-500">{ errors.title }</p> } */}
                </div>

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
