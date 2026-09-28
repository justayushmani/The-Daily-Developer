import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FallingScene.css';

gsap.registerPlugin(ScrollTrigger);

export default function FallingScene() {
  const sceneRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { y: 0, x: 0, rotation: -2, scale: 1, opacity: 1 },
          {
            y: '42vh',
            x: 22,
            rotation: 5,
            scale: 1.05,
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 0,
              end: () => ScrollTrigger.maxScroll(window),
              scrub: 1.7,
              invalidateOnRefresh: true,
            },
          }
        );
      }, sceneRef);

      return () => context.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <div ref={sceneRef} className="falling-scene" aria-hidden="true">
      <img
        ref={imageRef}
        className="falling-scene__image"
        src="/spiderman-mj-falling.jpg"
        alt=""
        draggable="false"
      />
    </div>
  );
}