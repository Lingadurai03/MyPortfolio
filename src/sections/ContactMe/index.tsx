import React from 'react';

import { Heading } from '@/components';

const ContactMe = () => {
    return (
        <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row gap-5 items-start justify-between mt-10'>
            {/* Contact Form */}
            <div className='w-full md:w-1/2 p-6 shadow-lg px-5 sm:px-10 py-5 sm:py-8 border border-l-white/10 border-t-white/10 border-b-0 border-r-0 gap-5 sm:gap-10 rounded-lg bg-white/3 backdrop-blur z-10 group'>
                <div className='flex justify-center mb-4'>
                    <Heading>Get in Touch</Heading>
                </div>
                <form action='your-form-action-url' method='POST'>
                    <div className='mb-4'>
                        <label
                            htmlFor='name'
                            className='block mb-1 text-emerald-100 text-sm'
                        >
                            Name*
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                            className='w-full p-2 px-3 border border-white/10 outline-none rounded-md'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='email'
                            className='block mb-1 text-emerald-100 text-sm'
                        >
                            Email*
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            className='w-full p-2 px-3 border border-white/10 outline-none rounded-md'
                        />
                    </div>
                    <div className='mb-4'>
                        <label
                            htmlFor='message'
                            className='block mb-1 text-emerald-100 text-sm'
                        >
                            Message*
                        </label>
                        <textarea
                            id='message'
                            name='message'
                            required
                            rows={4}
                            className='w-full p-2 px-3 border border-white/10 outline-none rounded-md'
                        ></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type='submit'
                            className='bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 rounded-md transition-all duration-500 hover:from-emerald-600 hover:to-emerald-500'
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Google Map */}
            <div className='w-full md:w-1/2 px-5 py-10'>
                <div className='h-96'>
                    <iframe
                        className='w-full h-full rounded-lg shadow-lg'
                        src='https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL'
                        allowFullScreen={true}
                        loading='lazy'
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
