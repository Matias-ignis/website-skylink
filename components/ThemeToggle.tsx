'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Evita errores de hidratación asegurando que el cliente esté montado
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        className="w-12 h-12 md:w-14 md:h-14 rounded-full"
      >
        <Sun className="h-6 w-6 md:h-7 md:w-7 opacity-50" />
        <span className="sr-only">Cargando tema...</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-background hover:bg-accent/50 text-foreground"
        >
          {/* Usamos rotación y escala para un efecto visual más pulido */}
          <Sun className="h-6 w-6 md:h-7 md:w-7 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 md:h-7 md:w-7 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Oscuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}