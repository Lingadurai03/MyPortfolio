import React from 'react';

import { ContactForm, ContactMap, Heading } from '@/components';

const ContactMe = () => {
    return (
        <section
            id='contact'
            className='max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-5 items-start justify-between mt-10 px-5'
        >
            {/* Contact Form */}
            <div className='w-full mx-auto max-w-[800px] lg:w-1/2 p-6 shadow-lg px-5 sm:px-10 py-5 sm:py-8 border border-l-white/10 border-t-white/10 border-b-0 border-r-0 gap-5 sm:gap-10 rounded-lg bg-white/3 backdrop-blur z-10 group'>
                <div className='flex justify-center mb-4'>
                    <Heading>Get in Touch</Heading>
                </div>
                <ContactForm />
            </div>

            {/* Google Map */}
            <div className='w-full mx-auto max-w-[800px] lg:w-1/2 py-10'>
                <div className='h-96'>
                    <ContactMap />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
