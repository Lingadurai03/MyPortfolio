import type { Metadata } from 'next';
import { Calistoga, Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

import { QueryProvider } from '@/components';

import './globals.css';

export const metadata: Metadata = {
    title: 'Lingadurai - Full Stack Developer',
    description:
        "Hi, I'm Lingadurai, a passionate Full Stack Developer skilled in React, Next.js, and NestJS. I specialize in building scalable, high-performance web applications and aim to create solutions that drive innovation and enhance user experiences.",
    icons: {
        icon: '/favicon.png',
    },
};

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: ['400'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={twMerge(
                    inter.variable,
                    calistoga.variable,
                    'bg-gray-900 text-white antialiased font-sans',
                )}
            >
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
