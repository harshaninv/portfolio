"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { num: "01.", label: "About", id: "about" },
    { num: "02.", label: "Experience", id: "experience" },
    { num: "03.", label: "Work", id: "work" },
    { num: "04.", label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
    );

    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ["contact", "work", "experience", "about"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("hero");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  return (
    <nav ref={navRef} className={`hv-nav${scrolled ? " scrolled" : ""}`} style={{ opacity: 0 }}>
      <div className="hv-nav-inner">
        <button
          className="hv-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to top"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <div className="hv-logo-mark">
            <span>HV</span>
          </div>
        </button>

        <div className="hv-nav-items">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              className={`hv-nav-item${active === item.id ? " active" : ""}`}
              onClick={() => scrollTo(item.id)}
              style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }}
            >
              <span className="hv-nav-num">{item.num}</span>
              {item.label}
            </button>
          ))}
          <a
            href="/Resume - Harshani Vitharana.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hv-btn hv-btn-secondary hv-btn-small"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
