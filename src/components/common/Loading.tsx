import React from 'react';
import logo from '../../logo.svg';

export default function Loading() {
    return (
        <div className="w-full flex items-center justify-center">
            <img 
                src={logo}
                className="w-16 h-16 animate-spin" 
                alt="logo" 
            />
        </div>
    );
}
