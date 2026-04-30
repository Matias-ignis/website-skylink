'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
// Importamos el tipo directamente desde la raíz del paquete
import { type ThemeProviderProps } from 'next-themes';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}