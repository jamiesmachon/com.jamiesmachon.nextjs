'use client';

import { useEffect, useRef } from 'react';
import { mouseTail } from '@/lib/mouse-tail';

import styles from './mouse-tail.module.scss';

const MouseTail = () => {
	const mouserTailRef = useRef();

	useEffect( () => {
		// do something here with the canvas
		mouseTail( mouserTailRef );
	}, [] );

	return <canvas ref={ mouserTailRef } className={ styles.canvas }></canvas>;
};

export default MouseTail;
