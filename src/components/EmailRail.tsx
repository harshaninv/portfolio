"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function EmailRail() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.8 });
      tl.to(railRef.current, { opacity: 1, duration: 0.01 })
        .from(".hv-rail-right .hv-rail-line", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.6,
          ease: "power3.out",
        })
        .from(".hv-rail-right a", {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "power3.out",
        }, "-=0.2");
    }, railRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={railRef} className="hv-rail hv-rail-right">
      <div className="hv-rail-line" />
      <a
        href="mailto:harshanineranjana@gmail.com"
        className="hv-rail-email"
        aria-label="Send email"
      >
        harshanineranjana@gmail.com
      </a>
    </div>
  );
}
