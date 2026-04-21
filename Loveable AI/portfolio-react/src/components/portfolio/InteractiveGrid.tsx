import { useEffect, useRef } from "react";

/**
 * Cursor-reactive grid background. Cells light up around the pointer.
 * Pure canvas — cheap and smooth at any size.
 */
const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cellSize = 44;
    const radius = 160;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / cellSize) + 1;
      const rows = Math.ceil(h / cellSize) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * cellSize;
          const y = j * cellSize;
          const cx = x + cellSize / 2;
          const cy = y + cellSize / 2;
          const dx = cx - mouse.current.x;
          const dy = cy - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / radius);

          // base subtle stroke
          ctx.strokeStyle = `rgba(120, 130, 160, ${0.06 + t * 0.2})`;
          ctx.lineWidth = 1;
          ctx.strokeRect(x + 0.5, y + 0.5, cellSize, cellSize);

          if (t > 0.05) {
            ctx.fillStyle = `rgba(59, 130, 246, ${t * 0.18})`;
            ctx.fillRect(x, y, cellSize, cellSize);
          }
        }
      }
      raf.current = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(draw);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-60" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div className="absolute inset-x-0 top-0 h-[40vh] bg-gradient-to-b from-primary/10 to-transparent" />
    </div>
  );
};

export default InteractiveGrid;