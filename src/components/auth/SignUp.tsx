import { navigate } from 'raviger';
import React, { useState } from 'react';
import { User } from '../../types/User';
import { signUp } from '../../utils/ApiCalls';

interface SignUpProps {
    onChangeMethodCB: () => void;
}

export default function SignUp(props: SignUpProps) {
    const { onChangeMethodCB } = props;
    const [userData, setUserData] = useState<User>({
        name: "",
        username: "",
        photoURL: ""
    });
    const [password, setPassword] = useState("");

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const data = await signUp(userData, password);
            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="px-6 py-8">
            <h3 className="text-3xl text-dark-gray font-bold">Sign Up</h3>
            <p className="mt-1 text-gray-600">Create an account to get started 🚀</p>

            <form onSubmit={handleSubmit}>
                <div className="flex flex-col my-6">
                    <label htmlFor="name" className="text-lg font-semibold text-dark-gray">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="rname" 
                        value={userData.name}
                        placeholder="Your name"
                        onChange={e => setUserData({
                            ...userData,
                            name: e.target.value
                        })}
                        className="mt-1 py-2 px-4 border-2 border-gray-400 rounded-md w-full focus:outline-0"
                    />
                </div>

                <div className="flex flex-col my-6">
                    <label htmlFor="username" className="text-lg font-semibold text-dark-gray">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={userData.username}
                        placeholder="Your username"
                        onChange={e => setUserData({
                            ...userData,
                            username: e.target.value
                        })}
                        className="mt-1 py-2 px-4 border-2 border-gray-400 rounded-md w-full focus:outline-0"
                    />
                </div>

                <div className="flex flex-col my-6">
                    <label htmlFor="password" className="text-lg font-semibold text-dark-gray">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        name="password" 
                        value={password}
                        placeholder="Your password"
                        onChange={e => setPassword(e.target.value)} 
                        className="mt-1 py-2 px-4 border-2 border-gray-400 rounded-md w-full focus:outline-0"
                    />
                </div>

                <button type="submit" className="w-full mt-6 py-3 text-lg text-white font-semibold bg-medium-purple rounded-md">
                    Sign Up
                </button>
            </form>

            <p className="mt-1 font-medium">
                Already a member ? 
                <button type="button" className="inline-block text-medium-purple font-medium px-1" onClick={onChangeMethodCB}>Sign In</button>
            </p>
        </div>
    );
}
