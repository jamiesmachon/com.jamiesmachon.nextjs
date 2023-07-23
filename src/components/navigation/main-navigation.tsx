'use client';

import Link from 'next/link';
import { MainNavigationProps } from '@/interfaces/main-navigation-props';
import { cn } from '@/lib/utils';

import SocialLinks from '@/components/social-links';
import ThemeToggle from '@/components/theme-toggle';

const MainNavigation = ({ className }: MainNavigationProps) => {
  return (
    <nav className={cn('flex justify-between items-center', className)}>
      <div>
        <Link href="/" className="text-white-800 hover:text-gray-900 font-bold text-xl">
          Jamie S Machon
        </Link>
      </div>
      <div className="grow text-center">
        <ul>
          <li className="inline-block mr-4">
            <Link href="#about" className="text-white-800 hover:text-gray-900 font-medium">
              About
            </Link>
          </li>
          <li className="inline-block mr-4">
            <Link href="#projects" className="text-white-800 hover:text-gray-900 font-medium">
              Projects
            </Link>
          </li>
          <li className="inline-block">
            <Link href="#contact" className="text-white-800 hover:text-gray-900 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <SocialLinks />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default MainNavigation;
