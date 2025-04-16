import React, { PropsWithChildren } from 'react';

const HeroOrbit = ({
    children,
    size,
    rotation,
}: PropsWithChildren<{ size: string; rotation: number }>) => {
    return (
        <div
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [animation-duration:30s]'
            style={{
                height: `${size}px`,
                width: `${size}px`,
                transform: `rotate(${rotation}deg)`,
            }}
        >
            <div
                className='inline-flex [animation-duration:5s]'
                style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
                {children}
            </div>
        </div>
    );
};

export default HeroOrbit;
