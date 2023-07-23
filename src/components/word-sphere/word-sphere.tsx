'use client';

import { useEffect, useRef } from 'react';
import { WordSphereProps } from '@/interfaces/word-sphere-props';
import { wordSphere } from '@/lib/word-sphere';
import { cn } from '@/lib/utils';

import styles from './word-sphere.module.scss';
import { useTheme } from 'next-themes';
import { WordSphereOptions } from '@/interfaces/word-sphere-options';

const WordSphere = ({ className }: WordSphereProps) => {
  const { theme } = useTheme();
  const worldSphereRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const texts = [
      'HTML5',
      'Javascript',
      'PHP',
      'Docker',
      'Typescript',
      'MySQL',
      'CSS3',
      'Angular',
      'SCSS',
      'MongoDB',
      'Android',
      'React',
      'NodeJS',
      'Kubernetes',
      'jQuery',
      'Redux',
      'iOS',
      'LESS',
      'Ionic',
      'Rx',
      'Git',
      'CI/CD',
      'Gulp',
      'Grunt',
      'Bootstrap',
      'JSON',
      'npm',
      'RestAPI',
      'TailwindCSS',
    ];
    const counts = [1, 2, 4, 5, 7, 5, 4, 2, 1];
    const options: WordSphereOptions = {
      width: 600,
      height: 600,
      fontColor: theme === 'light' ? '0,0,0' : '225,225,225',
      tilt: Math.PI / 9,
      initialVelocityX: 0.09,
      initialVelocityY: 0.09,
      initialRotationX: Math.PI * 0.14,
      initialRotationZ: 0,
    };

    // do something here with the canvas
    wordSphere(worldSphereRef, texts, counts, options);
  }, [theme]);

  return <canvas ref={worldSphereRef} className={cn(styles.canvas, className)}></canvas>;
};

export default WordSphere;
