import React from 'react';
import Link from 'next/link';

import { NAV_ITEMS } from '@/constants';

import { MotionAnimation } from '@/components';

const NavBar = () => {
    return (
        <section className='flex justify-center items-center w-full top-3 z-10 mt-3 fixed'>
            <MotionAnimation
                direction='down'
                className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'
            >
                {NAV_ITEMS.map((item) => (
                    <Link
                        key={item.name}
                        href={item.section}
                        className={`navItem ${item.className || ''}`}
                    >
                        {item.name}
                    </Link>
                ))}
            </MotionAnimation>
        </section>
    );
};

export default NavBar;
