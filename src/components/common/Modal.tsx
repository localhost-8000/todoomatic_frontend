import React, { ReactNode } from 'react'

interface ModelProps {
    children: ReactNode;
    open: boolean;
    onCloseCB: () => void
}

export default function Modal(props: ModelProps) {
    const {children, open, onCloseCB} = props;

    return (
        <div className={`${open ? "flex" : "hidden"} fixed z-200 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full items-center justify-center`} onClick={onCloseCB}>
            <div className="relative mx-auto px-5 py-4 border w-full max-w-[500px] shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
                { children }
            </div>
        </div>
    )
}

