"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "none" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.22, ease: "power2.out" });
    };

    const enterLink = () => {
      gsap.to(ring, { scale: 1.8, opacity: 0.4, duration: 0.2 });
      gsap.to(dot, { scale: 0.4, duration: 0.2 });
    };

    const leaveLink = () => {
      gsap.to(ring, { scale: 1, opacity: 0.6, duration: 0.2 });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a, button, .hv-proj, .hv-exp-tab");
    links.forEach((el) => {
      el.addEventListener("mouseenter", enterLink);
      el.addEventListener("mouseleave", leaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      links.forEach((el) => {
        el.removeEventListener("mouseenter", enterLink);
        el.removeEventListener("mouseleave", leaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
