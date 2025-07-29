"use client";

import { CookiesProvider } from 'react-cookie';
import { ReactNode } from 'react';

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <CookiesProvider>
      {children}
    </CookiesProvider>
  );
} 