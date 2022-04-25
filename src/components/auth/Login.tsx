import { navigate } from 'raviger';
import React, { useEffect, useState } from 'react';
import { logIn } from '../../utils/ApiCalls';

interface LoginProps {
    onChangeMethodCB: () => void;
}

export default function Login(props: LoginProps) {
    const { onChangeMethodCB } = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) navigate("/");
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const data = await logIn({username, password});
            console.log("token: ", data)
            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="px-6 py-8">
            <h3 className="text-3xl text-dark-gray font-bold">Login</h3>
            <p className="mt-1 text-gray-600">Enter your credentials to login</p>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col my-6">
                    <label htmlFor="username" className="text-lg font-semibold text-dark-gray">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        placeholder="Enter your username"
                        onChange={e => setUsername(e.target.value)}
                        className="mt-1 py-2 px-4 border-2 border-gray-400 rounded-md w-full focus:outline-0"
                    />
                </div>

                <div className="flex flex-col my-6">
                    <label htmlFor="password" className="text-lg font-semibold text-dark-gray">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        value={password} 
                        placeholder="Your password"
                        onChange={e => setPassword(e.target.value)}
                        className="mt-1 py-2 px-4 border-2 border-gray-400 rounded-md w-full focus:outline-0"
                    />
                </div>

                <button type="submit" className="w-full mt-6 py-3 text-lg text-white font-semibold bg-medium-purple rounded-md">
                    Login
                </button>
            </form>

            <p className="mt-1 font-medium">Not a member ? <button type="button" className="inline-block text-medium-purple font-medium px-1" onClick={onChangeMethodCB}>Sign Up</button></p>
        </div>
    );
}
