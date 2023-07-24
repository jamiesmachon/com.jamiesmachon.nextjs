'use client';

import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from '@/components/social-links';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-20">
        <div className="flex items-center justify-between md:flex-row flex-col">
          <Link href="/" className="md:mb-0 mb-9">
            <Image src="/logo.png" alt="Jamie S Machon Logo" width={200} height={55} priority />
          </Link>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
