'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Code, Menu, X } from 'lucide-react';
import { ActiveLink } from '@/components/ActiveLink';
import { ACTIVE_LINK_SECTIONS } from '@/constants/activeLinkCategories';

export const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex w-full py-4 sm:py-6 lg:py-8 justify-between items-center'>
          <Link href='/' onClick={closeMenu}>
            <div className='flex gap-3 sm:gap-4 lg:gap-5 items-center'>
              <Code
                size={32}
                className='text-primary sm:w-10 sm:h-10 lg:w-[46px] lg:h-[46px]'
              />
              <div className='font-heading uppercase font-bold text-secondary'>
                <p className='text-sm sm:hidden'>FERNANDA</p>
                <p className='hidden sm:block lg:hidden text-lg'>F. MASCHETI</p>
                <p className='hidden lg:block text-2xl'>FERNANDA MASCHETI</p>
              </div>
            </div>
          </Link>

          <nav className='hidden lg:flex gap-6 xl:gap-8'>
            {ACTIVE_LINK_SECTIONS.map(section => (
              <ActiveLink
                name={section.name}
                key={section.name}
                href={section.url}
                className='font-heading font-bold text-xl xl:text-2xl hover:text-primary transition-colors'
              />
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className='lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors'
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X size={24} className='text-secondary' />
            ) : (
              <Menu size={24} className='text-secondary' />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <nav className='lg:hidden border-t border-gray-100 py-4 animate-in slide-in-from-top-2'>
            <div className='flex flex-col gap-4'>
              {ACTIVE_LINK_SECTIONS.map(section => (
                <ActiveLink
                  name={section.name}
                  key={section.name}
                  href={section.url}
                  className='font-heading font-bold text-lg py-2 px-4 rounded-md hover:bg-gray-50 transition-colors'
                  onClick={closeMenu}
                />
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
