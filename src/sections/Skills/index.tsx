'use client';

import React from 'react';
import { motion } from 'framer-motion';

import {
    CssSVG,
    DockerSVG,
    HtmlSVG,
    JavaScriptSVG,
    MongoDBSVG,
    NestjsSVG,
    NextjsSVG,
    PostgressSVG,
    ReactNativeSVG,
    TypeScriptSVG,
} from '@/assets/svg';

import { Heading } from '@/components';

const Skills = () => {
    const icons = [
        CssSVG,
        DockerSVG,
        HtmlSVG,
        JavaScriptSVG,
        MongoDBSVG,
        NestjsSVG,
        NextjsSVG,
        PostgressSVG,
        ReactNativeSVG,
        TypeScriptSVG,
    ];

    return (
        <section className='mx-auto mt-10 max-w-[1200px]'>
            <div className='flex justify-center items-center'>
                <Heading>Skills</Heading>
            </div>

            <div
                className='overflow-hidden space-y-8 mt-10'
                style={{
                    maskImage:
                        'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                }}
            >
                {/* Row 1 */}
                <motion.div
                    className='flex space-x-6 animate-scroll-left'
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {icons.concat(icons).map((Icon, i) => (
                        <div
                            key={`row1-${i}`}
                            className='w-12 h-12 sm:w-28 sm:h-28 flex-shrink-0 bg-white/3 border border-white/10 rounded-md backdrop-blur flex justify-center items-center group'
                        >
                            <Icon className='size-10 sm:size-20 transition-all duration-300 group-hover:scale-110' />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 */}
                <motion.div
                    className='flex space-x-6 animate-scroll-right'
                    whileHover={{ animationPlayState: 'paused' }}
                >
                    {icons.concat(icons).map((Icon, i) => (
                        <div
                            key={`row2-${i}`}
                            className='w-12 h-12 sm:w-28 sm:h-28 flex-shrink-0 bg-white/3 border border-white/10 rounded-md backdrop-blur flex justify-center items-center group'
                        >
                            <Icon className='size-10 sm:size-20 transition-all duration-300 group-hover:scale-110' />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
