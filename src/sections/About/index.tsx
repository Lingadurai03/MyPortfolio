import React from 'react';

import { Heading } from '@/components';

const About = () => {
    return (
        <section id='about' className='relative overflow-x-clip px-5'>
            <div className='bg-emerald-300 sm:h-[800px] h-60 w-60 sm:w-[800px] -left-20 sm:left-[-500px] -z-10 absolute rounded-full opacity-40 blur-[100px] sm:blur-[400px]' />
            <div className='bg-emerald-300 top-[400px] -right-20 sm:top-[700px] h-60 w-60 sm:h-[800px] sm:w-[800px] sm:right-[-500px] -z-10 absolute rounded-full opacity-40 blur-[100px] sm:blur-[400px]' />

            <div className='max-w-[800px] mx-auto sm:mt-20 px-5 sm:px-10 py-5 sm:py-8 border border-l-white/10 border-t-white/10 border-b-0 border-r-0 flex flex-col justify-center items-center gap-5 sm:gap-10 rounded-lg bg-white/3 backdrop-blur z-10 group'>
                <Heading>About Me</Heading>

                <p className='text-xs md:text-base tracking-wide text-left'>
                    I'm a passionate{' '}
                    <span className='font-bold'>Full-Stack Developer</span> with{' '}
                    <span className='font-bold'>2+ years</span> of experience
                    crafting{' '}
                    <span className='font-bold'>
                        modern, scalable web and mobile applications
                    </span>{' '}
                    using cutting-edge technologies like{' '}
                    <span className='font-bold'>Next.js</span>,
                    <span className='font-bold'>NestJS</span>, and{' '}
                    <span className='font-bold'>React Native</span>. I thrive on
                    writing{' '}
                    <span className='font-bold'>clean, maintainable code</span>,
                    <span className='font-bold'>optimizing performance</span>,
                    and architecting{' '}
                    <span className='font-bold'>efficient systems</span>. Beyond
                    just building products, I deeply enjoy solving{' '}
                    <span className='font-bold'>real-world problems</span>{' '}
                    through elegant tech solutions. Currently, I'm sharpening my
                    skills in <span className='font-bold'>Data Structures</span>
                    ,<span className='font-bold'>Algorithms</span>, and{' '}
                    <span className='font-bold'>System Design</span> to embrace
                    more complex challenges and grow into a stronger, more
                    impactful developer.
                </p>
            </div>
        </section>
    );
};

export default About;
