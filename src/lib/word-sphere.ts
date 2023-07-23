/**
 * WordSphere
 * Written by Hyojun Kim in 2017. Licensed in MIT.
 */

import { WordSphereOptions } from '@/interfaces/word-sphere-options';

export function wordSphere(
  canvas: { current: HTMLCanvasElement },
  texts: string[],
  counts: number[],
  options: WordSphereOptions,
) {
  const PI = Math.PI; // happy math!
  const {
    width = 800,
    height = 800,
    radius = 300,
    padding = 50,
    fontSize = 22,
    fontColor = '255,255,255',
    tilt = 0,
    initialVelocityX = 0,
    initialVelocityY = 0,
    initialRotationX = 0,
    initialRotationZ = 0,
  } = options;

  let vx = initialVelocityX,
    vy = initialVelocityY;
  let rx = initialRotationX,
    rz = initialRotationZ;

  // canvas setup
  let ctx = canvas.current.getContext('2d');
  ctx.textAlign = 'center';

  // Hi-DPI support
  canvas.current.width = width * 2;
  canvas.current.height = height * 2;
  canvas.current.style.width = `${width}px`;
  canvas.current.style.height = `${height}px`;
  ctx.scale(2, 2);

  // scrolling
  let clicked = false,
    lastX: number,
    lastY: number;
  canvas.current.addEventListener('mousedown', (event) => {
    clicked = true;
    lastX = event.screenX;
    lastY = event.screenY;
  });
  canvas.current.addEventListener('mousemove', (event) => {
    if (!clicked) return;
    let dx = event.screenX - lastX;
    let dy = event.screenY - lastY;
    [lastX, lastY] = [event.screenX, event.screenY];

    // rotation update
    rz += -dy * 0.01;
    rx += dx * 0.01;

    // velocity update
    vx = dx * 0.1;
    vy = dy * 0.1;

    if (!looping) startLoop();
  });
  canvas.current.addEventListener('mouseup', (e) => (clicked = false));
  canvas.current.addEventListener('mouseleave', (e) => (clicked = false));

  function rot(x: number, y: number, t: number): [number, number] {
    return [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)];
  }

  function renderer() {
    // ensure element exists before we attempt to render
    if (!canvas.current) {
      return;
    }

    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);

    let ix = 0,
      iz = 0,
      i = 1;
    for (const text of texts) {
      const degZ = (PI / (counts.length - 1)) * iz;
      const degX = ((2 * PI) / counts[iz]) * ix;

      let x = radius * Math.sin(degZ) * Math.cos(degX);
      let y = radius * Math.sin(degZ) * Math.sin(degX);
      let z = radius * Math.cos(degZ) + 8 * (ix % 2); /* randomness */

      // camera transform
      [y, z] = rot(y, z, tilt);
      [x, z] = rot(x, z, rz);
      [x, y] = rot(x, y, rx);

      // convert to cartesian and then draw.
      const alpha = 0.6 + 0.4 * (x / radius);
      const size = fontSize + 2 + 5 * (x / radius);
      ctx.fillStyle = `rgba(${fontColor},${alpha})`;
      ctx.font = `${size}px "Helvetica Neue", sans-serif`;
      ctx.fillText(text, y + width / 2, -z + height / 2);

      ix--;
      if (ix < 0) {
        iz++;
        ix = counts[iz] - 1;
      }
      // eslint-disable-next-line no-unused-vars
      i++;
    }
  }

  // renderer
  let looping = false;

  function rendererLoop() {
    if (looping) window.requestAnimationFrame(rendererLoop);
    renderer();

    // deacceleration - dirty code xD
    if (vx > 0) vx = vx - 0.01;
    if (vy > 0) vy = vy - 0.01;
    if (vx < 0) vx = vx + 0.01;
    if (vy > 0) vy = vy + 0.01;
    if (vx == 0 && vy == 0) stopLoop();

    rz += vy * 0.01;
    rx += vx * 0.01;
  }

  function startLoop() {
    looping = true;
    window.requestAnimationFrame(rendererLoop);
  }

  function stopLoop() {
    looping = false;
  }

  startLoop();
}
