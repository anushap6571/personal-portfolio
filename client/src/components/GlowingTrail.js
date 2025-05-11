import React, { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 12;

const GlowingTrail = () => {
  const [positions, setPositions] = useState(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  );
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPositions((prev) => {
        const newPositions = [...prev];
        newPositions[0] = { x: e.clientX, y: e.clientY };
        for (let i = 1; i < TRAIL_LENGTH; i++) {
          newPositions[i] = {
            x: prev[i - 1].x + (prev[i].x - prev[i - 1].x) * 0.85,
            y: prev[i - 1].y + (prev[i].y - prev[i - 1].y) * 0.85,
          };
        }
        return newPositions;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate the trail
  useEffect(() => {
    const animate = () => {
      setPositions((prev) => [...prev]);
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: pos.x - 16,
            top: pos.y - 16,
            width: 32 - i * 1.5,
            height: 32 - i * 1.5,
            background: `radial-gradient(circle, #fbbf24 0%, #f472b6 80%, transparent 100%)`,
            opacity: 0.10 + (0.25 * (TRAIL_LENGTH - i)) / TRAIL_LENGTH,
            filter: "blur(6px)",
            transition: "left 0.16s, top 0.16s",
          }}
        />
      ))}
    </div>
  );
};

export default GlowingTrail; 