'use client';
import React, { PropsWithChildren } from 'react';

const Heading = ({ children }: PropsWithChildren) => {
    return (
        <div className='relative inline-block max-w-fit'>
            <h2 className='text-4xl text-center font-serif tracking-wider bg-gradient-to-r from-emerald-50 to-emerald-400 bg-clip-text text-transparent absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 hover:opacity-0 underline'>
                {children}
            </h2>
            <h2 className='text-4xl text-center font-serif tracking-wider bg-gradient-to-r from-emerald-400 to-emerald-50 bg-clip-text text-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100 hover:opacity-100 underline'>
                {children}
            </h2>
        </div>
    );
};

export default Heading;
