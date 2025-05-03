import React from 'react';

const Spinner = () => {
    return (
        <svg
            className='h-5 w-5 animate-spin text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
        >
            <circle
                className='opacity-25'
                cx='12'
                cy='12'
                r='10'
                stroke='currentColor'
                strokeWidth='4'
            ></circle>
            <path
                className='opacity-75'
                fill='currentColor'
                d='M12 2a10 10 0 00-3.95.81l1.2 2.9A7 7 0 0119 12h3a10 10 0 00-10-10z'
            ></path>
        </svg>
    );
};

export default Spinner;
