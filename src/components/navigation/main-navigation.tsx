'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import SocialLinks from '@/components/social-links';
import ThemeToggle from '@/components/theme-toggle';
import MainItems from './main-items';

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 right-0 z-10 py-4 px-8 bg-gray-900 text-white">
      <div className="relative">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            <Link href="/">
              <Image src="/logo.png" alt="Jamie S Machon Logo" width={200} height={55} priority />
            </Link>
          </div>
          <div className="lg:block hidden">
            <MainItems />
          </div>
          <div className="flex items-center gap-4">
            <SocialLinks className="lg:block hidden" />
            <ThemeToggle />
            <div className="lg:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-6 w-6 fill-current" />
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Menu */}
        <div className={`flex flex-col gap-5 ${menuOpen ? 'block' : 'hidden'}`}>
          <MainItems />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
