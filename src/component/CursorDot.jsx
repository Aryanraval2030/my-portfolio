import { useEffect, useRef } from "react";
function CursorDot() {
  const dotRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // Smoothly move dot towards mouse using lerp
      position.current.x += (mouse.current.x - position.current.x) * 0.14;
      position.current.y += (mouse.current.y - position.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed z-[1] w-2 h-2 bg-[#58a6ff] rounded-full pointer-events-none shadow-lg shadow-[#58a6ff]/50"
    />
  );
}

export default CursorDot;
