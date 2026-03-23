import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, label, summary";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const frameRef = useRef(0);
  const targetRef = useRef({ x: -100, y: -100 });
  const ringPositionRef = useRef({ x: -100, y: -100 });
  const dotPositionRef = useRef({ x: -100, y: -100 });
  const isInteractiveRef = useRef(false);
  const isPressedRef = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const handlePointerMode = () => setEnabled(mediaQuery.matches);

    handlePointerMode();
    mediaQuery.addEventListener("change", handlePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerMode);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("scrap-cursor", enabled);

    if (!enabled) {
      cancelAnimationFrame(frameRef.current);
      document.body.classList.remove("scrap-cursor");
      return undefined;
    }

    const moveCursor = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
    };

    const handleHoverState = (event) => {
      isInteractiveRef.current = Boolean(event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR));
    };

    const handlePress = () => {
      isPressedRef.current = true;
    };

    const handleRelease = () => {
      isPressedRef.current = false;
    };

    const hideCursor = () => {
      targetRef.current.x = -100;
      targetRef.current.y = -100;
      isInteractiveRef.current = false;
      isPressedRef.current = false;
    };

    const animate = () => {
      ringPositionRef.current.x += (targetRef.current.x - ringPositionRef.current.x) * 0.18;
      ringPositionRef.current.y += (targetRef.current.y - ringPositionRef.current.y) * 0.18;
      dotPositionRef.current.x += (targetRef.current.x - dotPositionRef.current.x) * 0.35;
      dotPositionRef.current.y += (targetRef.current.y - dotPositionRef.current.y) * 0.35;

      const ringScale = isInteractiveRef.current ? (isPressedRef.current ? 1.16 : 1.34) : isPressedRef.current ? 0.92 : 1;
      const dotScale = isInteractiveRef.current ? 0.84 : isPressedRef.current ? 0.78 : 1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPositionRef.current.x - 21}px, ${ringPositionRef.current.y - 21}px, 0) scale(${ringScale})`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPositionRef.current.x - 7}px, ${dotPositionRef.current.y - 7}px, 0) scale(${dotScale})`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    frameRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleHoverState, { passive: true });
    window.addEventListener("mousedown", handlePress);
    window.addEventListener("mouseup", handleRelease);
    window.addEventListener("blur", hideCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      cancelAnimationFrame(frameRef.current);
      document.body.classList.remove("scrap-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverState);
      window.removeEventListener("mousedown", handlePress);
      window.removeEventListener("mouseup", handleRelease);
      window.removeEventListener("blur", hideCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
