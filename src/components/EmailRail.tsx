"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function EmailRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.8 });
    tl.to(railRef.current, { opacity: 1, duration: 0.01 })
      .from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.6,
        ease: "power3.out",
      })
      .from(linkRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.2");

    return () => { tl.kill(); };
  }, []);

  return (
    <div ref={railRef} className="hv-rail hv-rail-right">
      <div ref={lineRef} className="hv-rail-line" />
      <a
        ref={linkRef}
        href="mailto:harshanineranjana@gmail.com"
        className="hv-rail-email"
        aria-label="Send email"
      >
        harshanineranjana@gmail.com
      </a>
    </div>
  );
}
