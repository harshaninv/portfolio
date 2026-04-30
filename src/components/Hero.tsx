"use client";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

function splitToChars(text: string) {
  return text.split("").map((char, i) => (
    <span key={i} className="char" aria-hidden="true">
      {char === " " ? "\u00A0" : char}
    </span>
  ));
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.to(eyebrowRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .to(
          nameRef.current!.querySelectorAll(".char"),
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            stagger: 0.028,
            duration: 0.7,
            ease: "back.out(1.4)",
          },
          "-=0.3"
        )
        .to(
          taglineRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.2"
        )
        .to(
          bodyRef.current,
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .to(
          ctaRef.current,
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hv-hero hv-section" id="hero" aria-label="Introduction">
      <div
        ref={eyebrowRef}
        className="hv-hero-eyebrow"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        Hi, my name is
      </div>

      <h1
        ref={nameRef}
        className="hv-hero-name"
        aria-label="Harshani Vitharana."
      >
        {splitToChars("Harshani Vitharana.")}
      </h1>

      <h1
        ref={taglineRef}
        className="hv-hero-tagline"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        I build things for the web.
      </h1>

      <p
        ref={bodyRef}
        className="hv-hero-body"
        style={{ opacity: 0, transform: "translateY(20px)" }}
      >
        I&rsquo;m a Full Stack Developer based in{" "}
        <a href="https://en.wikipedia.org/wiki/Colombo" target="_blank" rel="noopener noreferrer">
          Colombo, Sri Lanka
        </a>
        , focused on building accessible, performant products at the intersection of design and
        engineering. Currently building scalable web applications at{" "}
        <a href="https://avya.lk" target="_blank" rel="noopener noreferrer">
          Avya Technologies
        </a>
        , where I contribute to projects like the DIRAS Election Monitoring System.
      </p>

      <div
        ref={ctaRef}
        className="hv-hero-cta"
        style={{ opacity: 0, transform: "scale(0.9)" }}
      >
        <button
          className="hv-btn hv-btn-secondary"
          onClick={() => scrollTo("work")}
        >
          <span>Check out my work</span>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "relative", zIndex: 1 }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
