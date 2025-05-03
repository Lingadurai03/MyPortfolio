import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import emailjs from 'emailjs-com';

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

export function useContactForm() {
    return useMutation({
        mutationFn: async (data: ContactFormData) => {
            return await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID!,
                process.env.NEXT_PUBLIC_TEMPLATE_ID!,
                {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
                process.env.NEXT_PUBLIC_PUBLIC_KEY!,
            );
        },
        onSuccess: () => {
            toast.success('Message sent successfully!');
        },
        onError: () => {
            toast.error('Failed to send message. Try again later.');
        },
    });
}
