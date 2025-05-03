'use client';

import { useForm } from 'react-hook-form';

import { useContactForm } from '@/hooks/useContactForm';

import { Spinner } from '@/components';

interface FormFieldsType {
    name: string;
    email: string;
    message: string;
}
const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormFieldsType>();

    const { mutate, isPending } = useContactForm();

    const onSubmit = (data: FormFieldsType) => {
        if (isPending) return;
        mutate(data, {
            onSuccess: () => reset(),
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <div className='mb-4'>
                <label
                    htmlFor='name'
                    className='block mb-1 text-gray-300 text-sm'
                >
                    Name*
                </label>
                <input
                    type='text'
                    id='name'
                    {...register('name', { required: 'Name is required' })}
                    className='w-full p-2 px-3 border border-white/10 outline-none rounded-md'
                />
                {errors.name && (
                    <p className='text-red-500 text-xs mt-1'>
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email Field */}
            <div className='mb-4'>
                <label
                    htmlFor='email'
                    className='block mb-1 text-gray-300 text-sm'
                >
                    Email*
                </label>
                <input
                    type='email'
                    id='email'
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Invalid email address',
                        },
                    })}
                    className='w-full p-2 px-3 border border-white/10 outline-none rounded-md'
                />
                {errors.email && (
                    <p className='text-red-500 text-xs mt-1'>
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Message Field */}
            <div className='mb-4'>
                <label
                    htmlFor='message'
                    className='block mb-1 text-gray-300 text-sm'
                >
                    Message*
                </label>
                <textarea
                    id='message'
                    rows={4}
                    {...register('message', {
                        required: 'Message is required',
                        minLength: {
                            value: 10,
                            message: 'Message must be at least 10 characters',
                        },
                        maxLength: {
                            value: 500,
                            message: 'Message cannot exceed 500 characters',
                        },
                    })}
                    className='w-full p-2 px-3 border border-white/10 outline-none rounded-md'
                ></textarea>
                {errors.message && (
                    <p className='text-red-500 text-xs mt-1'>
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <div className='flex justify-center'>
                <button
                    type='submit'
                    className='bg-gradient-to-r from-emerald-500 to-emerald-600 text-white w-60 py-3 rounded-md transition-all duration-500 hover:from-emerald-600 hover:to-emerald-500 flex justify-center items-center'
                >
                    {isPending ? <Spinner /> : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
