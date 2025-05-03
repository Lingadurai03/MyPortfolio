import React from 'react';

import { Heading } from '@/components';

const WorkExperience = () => {
    return (
        <section id='experience' className='px-5'>
            <div className='max-w-[800px] mx-auto mt-20 px-5 sm:px-10 py-5 sm:py-8 border border-l-white/10 border-t-white/10 border-b-0 border-r-0 gap-5 sm:gap-10 rounded-lg bg-white/3 backdrop-blur z-10 group'>
                <div className='text-center'>
                    <Heading> Work Experience</Heading>
                </div>
                <div className='mt-5 relative border-l border-gray-300 max-w-3xl mx-auto pl-6'>
                    <div className='mb-10'>
                        <div className='absolute w-3 h-3 bg-emerald-300 rounded-full -left-1.5 top-1.5'></div>
                        <p className='text-sm text-white/80 italic underline'>
                            October 2022 – Present
                        </p>
                        <h3 className='text-xl font-semibold text-white'>
                            Associate Software Developer
                        </h3>
                        <p className='text-md font-medium text-emerald-300'>
                            Detrans Solutions LLP
                        </p>
                        <ul className='list-disc list-inside mt-3 text-white space-y-1 text-sm'>
                            <li>
                                Worked as Full-Stack Developer using{' '}
                                <span className='font-semibold'>
                                    Next.js, React Native, NestJS, Postgresql
                                </span>
                            </li>
                            <li>
                                Built scalable apps with{' '}
                                <span className='font-semibold'>
                                    role-based access, payment integration,
                                </span>{' '}
                                and{' '}
                                <span className='font-semibold'>
                                    OTP handling
                                </span>
                            </li>
                            <li>
                                Followed{' '}
                                <span className='font-semibold'>
                                    atomic design structure
                                </span>{' '}
                                and{' '}
                                <span className='font-semibold'>
                                    semantic commits
                                </span>{' '}
                                for clean architecture
                            </li>
                            <li>
                                Developed end-to-end features with secure and
                                efficient APIs
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
