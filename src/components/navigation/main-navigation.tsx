'use client';
import { useEffect, useRef } from 'react';
import { MainNavigationProps } from '@/interfaces/main-navigation-props';
import { cn } from '@/lib/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import styles from './main-navigation.module.scss';

const MainNavigation = ({ className }: MainNavigationProps) => {
  return (
    <nav className={cn(styles.nav, className)}>
      <ul className="flex justify-between">
        <li>
          <a href="/" className="text-white-800 hover:text-gray-900 font-bold text-xl">
            <img src="/logo.svg" alt="My Website" className="h-8" />
          </a>
        </li>
        <li>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="text-white-800 hover:text-gray-900 font-medium">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white-800 hover:text-gray-900 font-medium">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white-800 hover:text-gray-900 font-medium">
                Contact
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
