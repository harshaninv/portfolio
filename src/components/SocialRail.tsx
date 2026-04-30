"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const GithubIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 6.77 5.07 5.07 0 0 0 19.91 3S18.73 2.65 16 4.55a13.38 13.38 0 0 0-7 0C6.27 2.65 5.09 3 5.09 3A5.07 5.07 0 0 0 5 6.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

const CodepenIcon = () => (
  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 2 8.5v7L12 22l10-6.5v-7L12 2ZM12 22v-6.5M2 8.5l10 6.5 10-6.5M2 15.5l10-6.5 10 6.5M12 2v6.5" />
  </svg>
);

export default function SocialRail() {
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.6 });
      tl.to(railRef.current, { opacity: 1, duration: 0.01 })
        .from(".hv-rail-left a", {
          opacity: 0,
          y: 20,
          stagger: 0.1,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(".hv-rail-left .hv-rail-line", {
          scaleY: 0,
          transformOrigin: "top",
          duration: 0.6,
          ease: "power3.out",
        }, "-=0.2");
    }, railRef);

    return () => ctx.revert();
  }, []);

  const socials = [
    { href: "https://github.com/harshani", label: "GitHub", icon: <GithubIcon /> },
    { href: "https://linkedin.com/in/harshani-vitharana", label: "LinkedIn", icon: <LinkedinIcon /> },
    { href: "https://codepen.io", label: "CodePen", icon: <CodepenIcon /> },
  ];

  return (
    <div ref={railRef} className="hv-rail hv-rail-left">
      {socials.map(({ href, label, icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          {icon}
        </a>
      ))}
      <div className="hv-rail-line" />
    </div>
  );
}
