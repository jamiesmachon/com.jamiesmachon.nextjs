'use client';

import { useEffect, useRef } from 'react';
import { wordSphere } from '@/lib/word-sphere';

import styles from './word-sphere.module.scss';

const WordSphere = () => {
	const worldSphereRef = useRef();

	useEffect( () => {
		const texts = [
			'HTML5',
			'Javascript',
			'PHP',
			'Docker',
			'Capacitor',
			'Vue',
			'Typescript',
			'MySQL',
			'CSS3',
			'Python',
			'Java',
			'Angular',
			'SCSS',
			'MongoDB',
			'Android',
			'React',
			'NodeJS',
			'Redux',
			'iOS',
			'LESS',
			'Ionic',
			'Rx',
			'Git',
			'Gulp',
			'Grunt',
			'Bootstrap',
			'JSON',
			'npm',
			'RestAPI',
		];
		const counts = [ 1, 2, 4, 5, 7, 5, 4, 2, 1 ];
		const options = {
			tilt: Math.PI / 9,
			initialVelocityX: 0.09,
			initialVelocityY: 0.09,
			initialRotationX: Math.PI * 0.14,
			initialRotationZ: 0,
		};

		// do something here with the canvas
		wordSphere( worldSphereRef, texts, counts, options );
	}, [] );

	return <canvas ref={ worldSphereRef } className={ styles.canvas }></canvas>;
};

export default WordSphere;
