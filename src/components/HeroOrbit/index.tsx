import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
    size: string;
    rotation: number;
    animationDuration: number;
    shouldOrbit?: boolean;
    shouldSpin?: boolean;
}

const HeroOrbit = ({
    children,
    size,
    rotation,
    animationDuration,
    shouldOrbit = false,
    shouldSpin = false,
}: PropsWithChildren<Props>) => {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
            <div
                className={twMerge(shouldOrbit && 'animate-spin')}
                style={{ animationDuration: `${animationDuration}s` }}
            >
                <div
                    className='flex justify-start items-start'
                    style={{
                        height: `${size}px`,
                        width: `${size}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                >
                    <div
                        className={twMerge(
                            shouldSpin &&
                                'animate-spin [animation-duration:10s]',
                        )}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroOrbit;
