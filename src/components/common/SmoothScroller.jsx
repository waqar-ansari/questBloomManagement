import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useLocation } from 'react-router-dom';

export default function SmoothScroller({ children }) {
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust smoothness speed
    });

    // Re-initialize on route change
    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [location.pathname]);

  return (
    <div id="main-scroll-container" data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
