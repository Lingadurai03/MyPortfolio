'use client';
import React from 'react';
import { HTMLMotionProps, motion, Variants } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down' | 'fade';

interface MotionAnimationProps extends HTMLMotionProps<'div'> {
    className?: string;
    direction?: Direction;
    delay?: number;
    duration?: number;
}

const getVariants = (direction: Direction): Variants => {
    switch (direction) {
        case 'left':
            return {
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            };
        case 'right':
            return {
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
            };
        case 'up':
            return {
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            };
        case 'down':
            return {
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            };
        case 'fade':
        default:
            return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    }
};

const MotionAnimation = ({
    children,

    direction = 'fade',
    delay = 0.2,
    duration = 1,
    className,
    ...rest
}: MotionAnimationProps) => {
    const variants = getVariants(direction);

    return (
        <motion.div
            className={className}
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ delay, duration }}
            {...rest}
        >
            {children}
        </motion.div>
    );
};

export default MotionAnimation;
