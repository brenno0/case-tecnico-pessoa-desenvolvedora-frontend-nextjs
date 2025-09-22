'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ActiveLinkProps {
  href: string;
  name: string;
  className?: string;
  activeClassName?: string;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  name,
  className = '',
  activeClassName = 'text-primary font-bold',
}) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : 'text-secondary'}`}
    >
      {name}
    </Link>
  );
};
