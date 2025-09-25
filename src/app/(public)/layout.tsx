import React from 'react';
import { ResponsiveHeader } from '@/components/ResponsiveHeader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen flex flex-col'>
      <ResponsiveHeader />

      {children}

      <footer className='mt-8 sm:mt-12 lg:mt-15 mb-6 sm:mb-8 lg:mb-10'>
        <p className='text-neutral text-center font-sans text-sm sm:text-base px-4'>
          © Copyright 2025. Produzido por Fernanda Mascheti
        </p>
      </footer>
    </div>
  );
}
