'use client';

import Link from 'next/link';

const MainItems = () => {
  return (
    <nav className="flex flex-col lg:flex-row gap-5">
      <Link href="#about" className="block md:inline-block text-white-800 hover:text-pink-500">
        About
      </Link>
      <Link href="#projects" className="block md:inline-block text-white-800 hover:text-pink-500">
        Projects
      </Link>
      <Link href="#contact" className="block md:inline-block text-white-800 hover:text-pink-500">
        Contact
      </Link>
    </nav>
  );
};

export default MainItems;
