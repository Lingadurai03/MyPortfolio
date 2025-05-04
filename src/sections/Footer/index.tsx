import React from 'react';
import Link from 'next/link';

import {
    GeeksForGeeksSVG,
    GithubSVG,
    LeetCodeSVG,
    LinkedInSVG,
} from '@/assets/svg';

const Footer = () => {
    return (
        <footer className='text-gray-700 py-10 px-4 mt-20 border-t'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                {/* Brand */}
                <div>
                    <h2 className='text-3xl font-extrabold text-gray-300'>
                        Lingadurai
                        <span className='text-emerald-400'>.dev</span>
                    </h2>
                    <p className='mt-2 text-xs text-gray-400'>
                        Crafting intuitive, responsive, and performance-driven
                        web experiences with passion 💙
                    </p>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className='font-semibold text-gray-300 text-lg mb-3'>
                        Quick Links
                    </h3>
                    <ul className='space-y-2 text-sm text-gray-400'>
                        <li>
                            <a href='#hero' className='hover:underline'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#about' className='hover:underline'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#skills' className='hover:underline'>
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href='#contact' className='hover:underline'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className='font-semibold text-lg mb-3 text-gray-300'>
                        Find Me Online
                    </h3>
                    <ul className='flex space-x-4 text-xl'>
                        <li>
                            <Link
                                href='https://www.linkedin.com/in/lingadurai03'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <LinkedInSVG className='w-8 h-8 rounded-sm p-1' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://github.com/Lingadurai03'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <GithubSVG className='w-8 h-8 rounded-sm p-1' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://www.geeksforgeeks.org/user/lingadurai_033/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <GeeksForGeeksSVG className='w-8 h-8 rounded-sm p-1' />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://leetcode.com/u/lingadurai_033'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <LeetCodeSVG className='w-8 h-8 rounded-sm p-1' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='text-center text-xs mt-8 text-gray-400'>
                © {new Date().getFullYear()} Lingadurai — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
