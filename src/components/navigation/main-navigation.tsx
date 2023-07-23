'use client';

import { MainNavigationProps } from '@/interfaces/main-navigation-props';
import { cn } from '@/lib/utils';

import SocialLinks from '@/components/social-links';
import ThemeToggle from '@/components/theme-toggle';
import { Link } from 'lucide-react';

const MainNavigation = ({ className }: MainNavigationProps) => {
  return (
    <nav className={cn('flex justify-between items-center', className)}>
      <div>
        <a href="/" className="text-white-800 hover:text-gray-900 font-bold text-xl">
          Jamie S Machon
        </a>
      </div>
      <div className="grow text-center">
        <ul>
          <li className="inline-block mr-4">
            <a href="#about" className="text-white-800 hover:text-gray-900 font-medium">
              About
            </a>
          </li>
          <li className="inline-block mr-4">
            <a href="#projects" className="text-white-800 hover:text-gray-900 font-medium">
              Projects
            </a>
          </li>
          <li className="inline-block">
            <a href="#contact" className="text-white-800 hover:text-gray-900 font-medium">
              Contact
            </a>
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
