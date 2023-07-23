import React, { useEffect, useRef, useState } from "react";

function FadeInContainer(props: React.HTMLAttributes<HTMLElement>) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      })
    });

    const { current } = domRef;
    if (current !== null) {
      observer.observe(current);

      return () => observer.unobserve(current as HTMLDivElement);
    }
  }, []);
  return (
    <div
      className={`fade-in-section ${props.className ? props.className : ''} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeInContainer;
