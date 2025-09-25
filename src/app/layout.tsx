import React from 'react';
import type { Metadata } from 'next';
import { Chakra_Petch, Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import { ResponsiveHeader } from '@/components/ResponsiveHeader';

const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-heading',
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fernanda Mascheti - Ensino Programação',
  description:
    'Engenheira de Computação e Pedagoga. Ensino pensamento computacional para estudantes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={`${chakraPetch.variable} ${inter.variable} antialiased`}>
        <div className='min-h-screen flex flex-col'>
          <ResponsiveHeader />

          <main className='flex-1'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <Providers>{children}</Providers>
            </div>
          </main>

          <footer className='mt-8 sm:mt-12 lg:mt-15 mb-6 sm:mb-8 lg:mb-10'>
            <p className='text-neutral text-center font-sans text-sm sm:text-base px-4'>
              © Copyright 2025. Produzido por Fernanda Mascheti
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
