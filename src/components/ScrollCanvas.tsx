import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 300;
const FRAME_PREFIX = '/ezgif-6101c23b38db7ed5-jpg/ezgif-frame-';
const FRAME_EXT = '.jpg';

export const ScrollCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedFlagsRef = useRef<boolean[]>(new Array(TOTAL_FRAMES).fill(false));
  const progressRef = useRef<{ current: number; target: number }>({ current: 0, target: 0 });
  const lastRenderedRef = useRef<number>(-1);

  // Helper to get padded frame URL
  const getFrameUrl = (frameNum: number) => {
    const padded = String(frameNum).padStart(3, '0');
    return `${FRAME_PREFIX}${padded}${FRAME_EXT}`;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isDragging = false;
    let startY = 0;
    let startProgress = 0;

    // Draw single frame on canvas with aspect ratio cover
    const drawFrame = (frameIndex: number) => {
      const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
      let img = imagesRef.current[idx];

      if (!loadedFlagsRef.current[idx] || !img || !img.complete || img.naturalWidth === 0) {
        let closest = -1;
        let minDiff = Infinity;
        for (let i = 0; i < TOTAL_FRAMES; i++) {
          if (loadedFlagsRef.current[i] && imagesRef.current[i]?.complete && imagesRef.current[i].naturalWidth > 0) {
            const diff = Math.abs(i - idx);
            if (diff < minDiff) {
              minDiff = diff;
              closest = i;
            }
          }
        }
        if (closest !== -1) {
          img = imagesRef.current[closest];
        } else {
          return;
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const width = window.innerWidth;
      const height = window.innerHeight;
      const imgWidth = img.naturalWidth || 1920;
      const imgHeight = img.naturalHeight || 1080;

      const hRatio = width / imgWidth;
      const vRatio = height / imgHeight;
      const ratio = Math.max(hRatio, vRatio);

      const renderWidth = imgWidth * ratio;
      const renderHeight = imgHeight * ratio;
      const offsetX = (width - renderWidth) / 2;
      const offsetY = (height - renderHeight) / 2;

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
      lastRenderedRef.current = idx;
    };

    // Canvas resize handler (calibrated DPR for mobile 60/120fps performance)
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      const dpr = isMobile
        ? Math.min(window.devicePixelRatio || 1, 1.5)
        : Math.min(window.devicePixelRatio || 1, 2);

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      lastRenderedRef.current = -1;
      const targetFrame = Math.round(progressRef.current.current * (TOTAL_FRAMES - 1));
      drawFrame(targetFrame);
    };

    // Update target scroll progress from native window scroll
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const p = Math.max(0, Math.min(1, window.scrollY / maxScroll));
        progressRef.current.target = p;
      }
    };

    // Direct wheel listener for ultra-responsive desktop mouse wheel
    const handleWheel = (e: WheelEvent) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        const delta = e.deltaY;
        const scrollStep = delta / maxScroll;
        progressRef.current.target = Math.max(0, Math.min(1, progressRef.current.target + scrollStep));
        window.scrollTo({
          top: progressRef.current.target * maxScroll,
          behavior: 'instant'
        });
      }
    };

    // Desktop Mouse Drag to scrub
    const handleMouseDown = (e: MouseEvent) => {
      if (window.innerWidth < 768) return; // Ignore on mobile to keep native touch fluid
      const target = e.target as HTMLElement;
      if (target && (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('textarea') || target.closest('select'))) {
        return;
      }
      isDragging = true;
      startY = e.clientY;
      startProgress = progressRef.current.target;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaY = e.clientY - startY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const sensitivity = 0.0025;
      progressRef.current.target = Math.max(0, Math.min(1, startProgress - (deltaY * sensitivity)));
      if (maxScroll > 0) {
        window.scrollTo({
          top: progressRef.current.target * maxScroll,
          behavior: 'instant'
        });
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Keyboard support
    const handleKeyDown = (e: KeyboardEvent) => {
      const step = 0.04;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        progressRef.current.target = Math.min(1, progressRef.current.target + step);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        progressRef.current.target = Math.max(0, progressRef.current.target - step);
      } else if (e.key === 'Home') {
        progressRef.current.target = 0;
      } else if (e.key === 'End') {
        progressRef.current.target = 1;
      } else {
        return;
      }
      if (maxScroll > 0) {
        window.scrollTo({
          top: progressRef.current.target * maxScroll,
          behavior: 'instant'
        });
      }
    };

    // Preload image frames with pre-decoding
    const preloadImages = () => {
      imagesRef.current = new Array(TOTAL_FRAMES);
      loadedFlagsRef.current = new Array(TOTAL_FRAMES).fill(false);

      // Load first frame immediately and render
      const firstImg = new Image();
      firstImg.src = getFrameUrl(1);
      imagesRef.current[0] = firstImg;
      firstImg.onload = () => {
        loadedFlagsRef.current[0] = true;
        drawFrame(0);
      };
      if (firstImg.complete && firstImg.naturalWidth > 0) {
        loadedFlagsRef.current[0] = true;
        drawFrame(0);
      }

      // Load remaining frames asynchronously
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const frameIndex = i - 1;
        if (frameIndex === 0) continue;

        const img = new Image();
        img.src = getFrameUrl(i);
        imagesRef.current[frameIndex] = img;
        img.onload = () => {
          loadedFlagsRef.current[frameIndex] = true;
          if (typeof img.decode === 'function') {
            img.decode().catch(() => {});
          }
        };
      }
    };

    // Smooth inertia render loop (responsive lerp tuned for mobile 60/120fps)
    const renderLoop = () => {
      const isMobile = window.innerWidth < 768;
      const lerp = isMobile ? 0.15 : 0.09;
      const diff = progressRef.current.target - progressRef.current.current;

      if (Math.abs(diff) > 0.0001) {
        progressRef.current.current += diff * lerp;
      } else {
        progressRef.current.current = progressRef.current.target;
      }

      const frameIndex = Math.round(progressRef.current.current * (TOTAL_FRAMES - 1));
      if (frameIndex !== lastRenderedRef.current) {
        drawFrame(frameIndex);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    handleResize();
    preloadImages();
    handleScroll();
    renderLoop();

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden transform-gpu will-change-transform">
      <canvas
        ref={canvasRef}
        id="bg-animation-canvas"
        className="w-full h-full block bg-black"
        style={{ imageRendering: 'auto' }}
      />
      {/* Low-intensity soft background blur */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/15 pointer-events-none" />
    </div>
  );
};
