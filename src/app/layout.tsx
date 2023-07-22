import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import MainNavigation from '@/components/navigation/main-navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jamie S Machon',
  description: 'DevOps Engineer & Developer',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <MainNavigation className="text-2xl p-5" />
        {children}
      </body>
    </html>
  );
}
