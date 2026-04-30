
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from '@/components/ThemeProvider'
import AppWideNavbar from '@/components/layout/AppWideNavbar'
import { cn } from '@/lib/utils'
import Script from 'next/script'
import InteractiveBackground from '@/components/InteractiveBackground'
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Skylink ERP | El ERP que se adapta a tu operación',
  description: 'Unifica inventario, compras y finanzas con la flexibilidad que tu negocio necesita para escalar.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full !scroll-smooth">
      <body className={cn(
        inter.className,
        "h-full antialiased relative"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <InteractiveBackground />
          <AppWideNavbar />
          <main className="pt-16 h-full">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17234607962"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17234607962');
          `}
        </Script>

      </body>
    </html>
  );
}
