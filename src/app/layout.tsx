import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/theme-provider';
import MainNavigation from '@/components/navigation/';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jamie S Machon',
  description: 'DevOps Engineer & Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MainNavigation className="absolute top-0 left-0 right-0 z-50 text-2xl p-5" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
