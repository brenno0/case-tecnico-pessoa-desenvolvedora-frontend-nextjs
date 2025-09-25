'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface ActiveLinkProps {
  href: string;
  name: string;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  href,
  name,
  className = '',
  activeClassName = 'text-primary font-bold',
  exact = false,
}) => {
  const pathname = usePathname();

  const isActive =
    href === '/'
      ? pathname === '/'
      : exact
        ? pathname === href
        : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : 'text-secondary'}`}
    >
      {name}
    </Link>
  );
};
