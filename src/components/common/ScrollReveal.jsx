import React, { useRef, useState, useEffect } from 'react';

/**
 * ScrollReveal component
 * Applies hardware-accelerated entry transitions when scrolling into view,
 * both when scrolling down and when scrolling back up.
 */
export default function ScrollReveal({
  children,
  className = '',
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'fade'
  delay = 0,
  duration = 700,
  distance = 32, // pixel distance for slide
  threshold = 0.12,
  resetOnExit = true, // Enables bidirectional animation (re-animates when scrolling back up)
}) {
  const domRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (resetOnExit) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, resetOnExit]);

  // Compute transform style based on direction
  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';

    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}px, 0)`;
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transform-gpu ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', // Smooth ease-out curve
      }}
    >
      {children}
    </div>
  );
}
