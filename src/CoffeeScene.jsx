import { useEffect, useRef, useState } from 'react';

// Use the supplied genuine coffee-pour footage. The supplied image remains
// the poster/fallback; no pixel warping or simulated footage is used.
export function CoffeeScene({ enabled }) {
  const videoRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const videoSource = import.meta.env.VITE_COFFEE_VIDEO_URL || '/assets/mm_video.mp4';
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loaded) return;
    if (enabled) video.play().catch(() => {});
    else video.pause();
  }, [enabled, loaded]);
  return <div className="coffee-scene">
    <img className="hero-image" src="/assets/hero-clean.webp" alt="A copper coffee pot pouring into a patterned Qahwa cup, with dates and Amman’s skyline in golden afternoon light." fetchPriority="high" width="2065" height="762" />
    <video ref={videoRef} className={`coffee-video ${loaded ? 'ready' : ''}`} muted loop playsInline preload="auto" poster="/assets/hero-clean.webp" onLoadedData={() => setLoaded(true)} onError={() => setLoaded(false)} aria-hidden="true"><source src={videoSource} type="video/mp4" /></video>
    <span className={`coffee-video-shade ${loaded ? 'ready' : ''}`} aria-hidden="true" />
  </div>;
}
