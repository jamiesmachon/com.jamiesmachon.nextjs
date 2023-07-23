'use client';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/social-links';

const Footer = () => {
  return (
    <footer>
      <div className="container py-20">
        <div className="flex flex-col text-center">
          <h3 className="text-4xl mb-5">DevOps Engineer & Developer</h3>
          <p className="text-base mb-5">Jamie S Machon</p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
