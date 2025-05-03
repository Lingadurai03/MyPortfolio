'use client';

import React, { PropsWithChildren } from 'react';
import {
    QueryClient,
    QueryClientProvider as ReactQueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryProvider = ({ children }: PropsWithChildren) => {
    return (
        <ReactQueryClientProvider client={queryClient}>
            {children}
        </ReactQueryClientProvider>
    );
};

export default QueryProvider;
