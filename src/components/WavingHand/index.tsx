'use client';
import { motion } from 'framer-motion';

const WavingHand = () => {
    return (
        <motion.span
            className='inline-block origin-[70%_70%]'
            animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
            }}
        >
            👋
        </motion.span>
    );
};

export default WavingHand;
