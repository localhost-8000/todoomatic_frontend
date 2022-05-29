import { navigate } from 'raviger';
import React, { useEffect, useState } from 'react';
import { logIn } from '../../utils/ApiCalls';
import { LoadingButton } from "@mui/lab";
import RocketLaunch from '@mui/icons-material/RocketLaunch';
import { Alert, AlertTitle } from '@mui/material';
import { Error } from '../../types/Common';
import { User } from '../../types/User';

interface LoginProps {
    onChangeMethodCB: () => void;
}

type LoginType = {
    username: string;
    password: string;
    other?: string;
}

const validateForm = (data: LoginType) => {
    const errors: Error<LoginType> = {};
    if(data.username.length < 1) {
        errors.username = "Username is required";
    }
    if(data.password.length < 1) {
        errors.password = "Password is required";
    }
    
    return errors;
}

export default function Login(props: LoginProps) {
    const { onChangeMethodCB } = props;
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<Error<LoginType>>({});

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token) navigate("/");
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const errors = validateForm({username, password});
        setError(errors);

        if(Object.keys(errors).length !== 0) return;

        try {
            setLoading(true);
            const data = await logIn({username, password});
            localStorage.setItem("token", data.token);
            if(data.token) window.location.href = "/";
        } catch (err) {
            setError({
                ...error,
                other: "Invalid credentials provided!"
            })
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="px-6 py-8">
            {error.other! && <Alert severity="error" className="my-2 -mt-2 h-12">
                <AlertTitle><strong>{error.other}</strong></AlertTitle>
            </Alert>}
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
                    {error.username && <Alert severity="error" className="mt-2 h-12">
                        <AlertTitle><strong>{error.username}</strong></AlertTitle>
                    </Alert>}
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
                    {error.password && <Alert severity="error" className="mt-2 h-12">
                        <AlertTitle><strong>{error.password}</strong></AlertTitle>
                    </Alert>}
                </div>

                <div className="w-full mt-6">
                    <LoadingButton
                        type="submit"
                        endIcon={<RocketLaunch />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        className='w-full'
                        color='primary'
                    >
                        Login
                    </LoadingButton>

                </div>
            </form>
            <p className="mt-2 font-medium">Not a member ? <button type="button" className="inline-block text-medium-purple font-medium px-1" onClick={onChangeMethodCB}>Sign Up</button></p>
        </div>
    );
}
