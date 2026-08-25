const TOTAL_FRAMES = 300;
const FRAME_PATH_PREFIX = 'ezgif-6101c23b38db7ed5-jpg/ezgif-frame-';
const FRAME_EXTENSION = '.jpg';

const canvas = document.getElementById('animation-canvas');
const ctx = canvas.getContext('2d');

const images = new Array(TOTAL_FRAMES);
const loadedFlags = new Array(TOTAL_FRAMES).fill(false);

// Scroll progress from 0.0 to 1.0
let targetProgress = 0;
let currentProgress = 0;
let lastRenderedFrame = -1;
let isFirstDrawDone = false;

// Format frame index to 3-digit string (e.g., 1 -> "001")
function getFrameUrl(index) {
  const paddedIndex = String(index).padStart(3, '0');
  return `${FRAME_PATH_PREFIX}${paddedIndex}${FRAME_EXTENSION}`;
}

// Adjust canvas resolution for high-DPI displays
function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  lastRenderedFrame = -1;
  renderFrame(Math.round(currentProgress * (TOTAL_FRAMES - 1)));
}

// Render a specific frame onto canvas with cover fit
function renderFrame(frameIndex) {
  if (frameIndex < 0) frameIndex = 0;
  if (frameIndex >= TOTAL_FRAMES) frameIndex = TOTAL_FRAMES - 1;

  let img = images[frameIndex];
  if (!loadedFlags[frameIndex]) {
    // Fallback to nearest loaded frame
    let closestIndex = -1;
    let minDiff = Infinity;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (loadedFlags[i]) {
        const diff = Math.abs(i - frameIndex);
        if (diff < minDiff) {
          minDiff = diff;
          closestIndex = i;
        }
      }
    }
    if (closestIndex !== -1) {
      img = images[closestIndex];
    } else {
      return;
    }
  }

  if (!img || !img.complete || img.naturalWidth === 0) return;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;

  // Cover aspect ratio calculations
  const hRatio = width / imgWidth;
  const vRatio = height / imgHeight;
  const ratio = Math.max(hRatio, vRatio);

  const renderWidth = imgWidth * ratio;
  const renderHeight = imgHeight * ratio;
  const offsetX = (width - renderWidth) / 2;
  const offsetY = (height - renderHeight) / 2;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  lastRenderedFrame = frameIndex;
}

// Preload all frames
function preloadFrames() {
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const imgIndex = i - 1;
    const img = new Image();
    img.src = getFrameUrl(i);
    images[imgIndex] = img;
    img.onload = () => {
      loadedFlags[imgIndex] = true;
      if (!isFirstDrawDone && imgIndex === 0) {
        renderFrame(0);
        isFirstDrawDone = true;
      }
    };
  }
}

// Update scroll progress from native window scroll
function onWindowScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0) {
    targetProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
  }
}

// Direct wheel listener for ultra-smooth responsiveness
window.addEventListener('wheel', (e) => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0) {
    const delta = e.deltaY;
    const scrollStep = delta / maxScroll;
    targetProgress = Math.max(0, Math.min(1, targetProgress + scrollStep));
    window.scrollTo({
      top: targetProgress * maxScroll,
      behavior: 'instant'
    });
  }
}, { passive: true });

// Touch & Mouse Drag to scrub
let isDragging = false;
let startY = 0;
let startProgress = 0;

window.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startProgress = targetProgress;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const sensitivity = 0.003;
  targetProgress = Math.max(0, Math.min(1, startProgress - (deltaY * sensitivity)));
  if (maxScroll > 0) {
    window.scrollTo({
      top: targetProgress * maxScroll,
      behavior: 'instant'
    });
  }
});

window.addEventListener('mouseup', () => { isDragging = false; });

// Touch events for mobile/tablet
window.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    isDragging = true;
    startY = e.touches[0].clientY;
    startProgress = targetProgress;
  }
}, { passive: true });

window.addEventListener('touchmove', (e) => {
  if (!isDragging || e.touches.length !== 1) return;
  const deltaY = e.touches[0].clientY - startY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const sensitivity = 0.003;
  targetProgress = Math.max(0, Math.min(1, startProgress - (deltaY * sensitivity)));
  if (maxScroll > 0) {
    window.scrollTo({
      top: targetProgress * maxScroll,
      behavior: 'instant'
    });
  }
}, { passive: true });

window.addEventListener('touchend', () => { isDragging = false; });

// Keyboard navigation
window.addEventListener('keydown', (e) => {
  const step = 0.05;
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    targetProgress = Math.min(1, targetProgress + step);
    onTargetProgressUpdated();
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    targetProgress = Math.max(0, targetProgress - step);
    onTargetProgressUpdated();
  } else if (e.key === 'Home') {
    targetProgress = 0;
    onTargetProgressUpdated();
  } else if (e.key === 'End') {
    targetProgress = 1;
    onTargetProgressUpdated();
  }
});

function onTargetProgressUpdated() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (maxScroll > 0) {
    window.scrollTo({
      top: targetProgress * maxScroll,
      behavior: 'instant'
    });
  }
}

// Continuous smooth animation loop with inertia
function animationLoop() {
  const lerpFactor = 0.09;
  const diff = targetProgress - currentProgress;

  if (Math.abs(diff) > 0.0001) {
    currentProgress += diff * lerpFactor;
  } else {
    currentProgress = targetProgress;
  }

  const currentFrame = Math.round(currentProgress * (TOTAL_FRAMES - 1));
  if (currentFrame !== lastRenderedFrame) {
    renderFrame(currentFrame);
  }

  requestAnimationFrame(animationLoop);
}

// Event Listeners
window.addEventListener('scroll', onWindowScroll, { passive: true });
window.addEventListener('resize', resizeCanvas);

// Initialize
window.addEventListener('DOMContentLoaded', () => {
  resizeCanvas();
  preloadFrames();
  onWindowScroll();
  requestAnimationFrame(animationLoop);
});
