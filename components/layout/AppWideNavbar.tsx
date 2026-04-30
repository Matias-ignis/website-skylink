'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#verticales', label: 'Verticales' },
  { href: '#trazabilidad', label: '¿Por qué Skylink?' },
  { href: '#ia', label: 'IA Aplicada' },
  { href: '#empresa', label: 'Empresa' },
];

const AppWideNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center bg-background/80 glass-premium border-b border-border/50">
      <Link className="flex items-center justify-center mr-6 group" href="/">
        {/* Skylink Logo Text */}
        <span className="text-xl font-headline font-bold tracking-wider">
          <span className="text-gradient-gold">Sky</span>
          <span className="text-foreground">link</span>
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary tracking-wide"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="ml-auto flex items-center gap-3">
        <ThemeToggle />
        <Button asChild className="shimmer-btn hidden sm:inline-flex">
          <Link href="#contact">Solicitar Demo</Link>
        </Button>
        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 glass-premium border-b border-border/50 md:hidden">
          <nav className="flex flex-col p-4 gap-3">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="shimmer-btn mt-2">
              <Link href="#contact" onClick={() => setMobileOpen(false)}>Solicitar Demo</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppWideNavbar;
