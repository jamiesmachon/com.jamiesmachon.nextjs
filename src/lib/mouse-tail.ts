export function mouseTail( canvas ) {
	const ctx = canvas.current.getContext( "2d" );
	const particlesArray = [];
	let hue = 0;

	canvas.current.width = innerWidth;
	canvas.current.height = innerHeight;

	window.addEventListener( "resize", () => {
		canvas.current.width = innerWidth;
		canvas.current.height = innerHeight;
	} );

	canvas.current.addEventListener( "mousemove", ( e ) => {
		mouse.x = e.x;
		mouse.y = e.y;

		for ( let i = 0; i < 5; i++ ) {
			const p = new particle();
			particlesArray.push( p );
		}
	} );
	canvas.current.addEventListener( "click", ( e ) => {
		mouse.x = e.x;
		mouse.y = e.y;

		for ( let i = 0; i < 5; i++ ) {
			const p = new particle();
			particlesArray.push( p );
		}
	} );

	//mouse
	const mouse = {
		x: 0,
		y: 0,
	};

	//particle
	const particle = function () {
		// this.x = mouse.x - 130; // TODO: GET WIDTH FROM SIDEBAR WHEN IN PLACE
		this.x = mouse.x; // TODO: GET WIDTH FROM SIDEBAR WHEN IN PLACE
		this.y = mouse.y;
		this.size = Math.random() * 15 + 1;
		this.velocityX = Math.random() * 3 - 1.5;
		this.velocityY = Math.random() * 3 - 1.5;
		this.color = `hsl(${ hue }, 100%, 50%)`;

		this.update = function () {
			this.x += this.velocityX;
			this.y += this.velocityY;
			if ( this.size > 0.4 ) this.size -= 0.1;
		};
		this.draw = function () {
			ctx.strokeStyle = this.color;
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.arc( this.x, this.y, this.size, 0, Math.PI * 2 );
			ctx.stroke();
		};
	};

	function animate() {
		// ensure element exists before we attempt to render
		if ( !canvas.current ) {
			return;
		}

		ctx.fillStyle = "transparent";
		ctx.fillRect( 0, 0, canvas.current.width, canvas.current.height );

		for ( let i = 0; i < particlesArray.length; i++ ) {
			particlesArray[ i ].update();
			particlesArray[ i ].draw();

			if ( particlesArray[ i ].size <= 0.5 ) {
				particlesArray.splice( i, 1 );
				i--;
				for ( let j = i; j < particlesArray.length; j++ ) {
					try {
						const dx = particlesArray[ i ].x - particlesArray[ j ].x;
						const dy = particlesArray[ i ].y - particlesArray[ j ].y;
						const distance = Math.sqrt( dx * dx + dy * dy );

						if ( distance < 100 ) {
							ctx.beginPath();
							ctx.lineWidth = particlesArray[ i ].size;
							ctx.moveTo( particlesArray[ i ].x, particlesArray[ i ].y );
							ctx.lineTo( particlesArray[ j ].x, particlesArray[ j ].y );
							ctx.stroke();
						}
					} catch ( error ) {
						console.log( error );
					}
				}
			}
		}

		hue++;
		requestAnimationFrame( animate );
	}

	animate();
}
