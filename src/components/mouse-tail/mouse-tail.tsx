'use client';

import { useEffect, useRef } from 'react';
import { MouseTailProps } from '@/interfaces/mouse-tail-props';
import { mouseTail } from '@/lib/mouse-tail';
import { cn } from '@/lib/utils';

import styles from './mouse-tail.module.scss';

const MouseTail = ({ className }: MouseTailProps) => {
  const mouserTailRef = useRef(null);

  useEffect(() => {
    // do something here with the canvas
    mouseTail(mouserTailRef);
  }, []);

  return <canvas ref={mouserTailRef} className={cn(styles.canvas, className)}></canvas>;
};

export default MouseTail;
