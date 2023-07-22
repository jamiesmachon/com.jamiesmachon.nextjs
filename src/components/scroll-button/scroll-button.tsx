'use client';
import { useEffect, useRef } from 'react';
import { ScrollButtonProps } from '@/interfaces/scroll-button-props';
import { cn } from '@/lib/utils';

import styles from './scroll-button.module.scss';

const ScrollButton = ({ scrollTo, className }: ScrollButtonProps) => {
  const scrollButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // do something here with the button
  }, []);

  return (
    <div className={cn(styles.scollButton, className)}>
      <a ref={scrollButtonRef} href={scrollTo}>
        <span />
        Scroll Down
      </a>
    </div>
  );
};

export default ScrollButton;
