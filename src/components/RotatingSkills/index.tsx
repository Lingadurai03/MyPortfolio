import React from 'react';

import { MY_SKILLS } from '@/constants';

const RotatingSkills = () => {
    return (
        <div className='relative h-6 overflow-hidden text-white text-lg font-semibold'>
            <div className='flex flex-col items-center sm:items-start'>
                {MY_SKILLS.map((skill, i) => (
                    <span
                        key={i}
                        className='skillItem text-center animate-smoothSlide text-highlight font-bold'
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default RotatingSkills;
