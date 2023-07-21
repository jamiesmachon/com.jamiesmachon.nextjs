'use client';

import { useEffect, useRef } from "react";

import styles from "./scroll-button.module.scss";

const ScrollButton = ( { scrollTo, className } ) => {
	const scrollButtonRef = useRef();

	let buttonClassName = styles.scollButton;

	if ( className ) {
		buttonClassName = `${ buttonClassName } ${ className }`;
	}

	useEffect( () => {
		// do something here with the button
	}, [] );

	return (
		<div className={ buttonClassName }>
			<a ref={ scrollButtonRef } href={ scrollTo }>
				<span/>
				Scroll Down
			</a>
		</div>
	);
};

export default ScrollButton;
