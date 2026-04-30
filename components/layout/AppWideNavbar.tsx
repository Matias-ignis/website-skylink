
'use client';

import React from 'react';
import Link from 'next/link';
import { SquareStack } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '#solution', label: 'Producto' },
  { href: '#modules', label: 'Módulos' },
  { href: '#solutions', label: 'Soluciones' },
  { href: '#empresa', label: 'Empresa' },
];

const AppWideNavbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-md shadow-sm border-b">
      <Link className="flex items-center justify-center mr-6" href="/">
        <SquareStack className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-bold">Skylink</span>
      </Link>
      <nav className="hidden md:flex gap-4 sm:gap-6 items-center">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="ml-auto flex items-center gap-4">
        <ThemeToggle />
        <Button asChild>
          <Link href="#contact">Solicitar demo guiada</Link>
        </Button>
      </div>
    </header>
  );
};

export default AppWideNavbar;
