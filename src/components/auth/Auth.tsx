import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default function Auth() {
    const [isLogin, setIsLogin] = React.useState(true);

    return (
        <div className="w-full max-w-[1200px] mx-auto min-h-screen flex items-center justify-center">
            <div className="w-full max-w-[600px] border-2 border-dark-purple rounded-lg">
                <h2 className="text-3xl bg-dark-purple text-white font-bold text-center py-4 rounded-tl-lg rounded-tr-lg -mt-1 -mr-0.5">TodooMatic</h2>
                {isLogin ? <Login onChangeMethodCB={() => setIsLogin(false)} /> : <SignUp onChangeMethodCB={() => setIsLogin(true)} />}
            </div>
        </div>
    );
}
