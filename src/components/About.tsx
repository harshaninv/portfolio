"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const skills = [
  "JavaScript (ES6+)",
  "PHP / Laravel",
  "React.js / Next.js",
  "Flutter / Dart",
  "Node.js",
  "MySQL / PostgreSQL",
  "MongoDB",
  "Figma / UI-UX",
  "Tailwind CSS",
  "Git / GitHub / Jira",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      });

      tl.from(headRef.current, { opacity: 0, x: -30, duration: 0.7, ease: "power3.out" })
        .from(
          ruleRef.current,
          { scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          copyRef.current!.querySelectorAll("p"),
          { opacity: 0, y: 24, stagger: 0.15, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .to(
          ".hv-about-skills li",
          { opacity: 1, x: 0, stagger: 0.06, duration: 0.5, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          photoRef.current,
          { opacity: 0, x: 40, duration: 0.9, ease: "power3.out" },
          "<-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="hv-section" aria-label="About">
      <h2 ref={headRef} className="hv-section-head">
        <span className="hv-section-num">01.</span>
        <span className="hv-section-title">About Me</span>
        <span ref={ruleRef} className="hv-section-rule" />
      </h2>

      <div className="hv-about-grid">
        <div ref={copyRef} className="hv-about-copy">
          <p>
            Hello! I&rsquo;m Harshani — a motivated and detail-oriented Full Stack Developer
            with hands-on experience building production web applications. My journey into
            programming started with curiosity and turned into a passion for crafting things
            that live on the internet.
          </p>
          <p>
            I have experience working across the full stack — from designing{" "}
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
              Figma
            </a>{" "}
            wireframes and implementing pixel-perfect UIs to architecting{" "}
            <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">
              Laravel
            </a>{" "}
            backends with RESTful APIs, third-party integrations, and automated tests. I
            thrive in Agile teams and love the process of taking an idea from concept to
            deployment.
          </p>
          <p>
            Currently, I&rsquo;m building at{" "}
            <a href="https://avya.lk" target="_blank" rel="noopener noreferrer">
              Avya Technologies
            </a>{" "}
            where I contribute to major civic-tech and enterprise projects. I hold a BSc. Hons
            in Computing &amp; Information Systems from Sabaragamuwa University of Sri Lanka.
          </p>
          <p>Here are a few technologies I work with daily:</p>
          <ul className="hv-about-skills" role="list">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div ref={photoRef} className="hv-photo-wrap">
          <div className="hv-photo-frame">
            <div className="hv-photo-inner">
              <div className="hv-photo-monogram">HV</div>
              <div className="hv-photo-caption">Harshani Vitharana</div>
            </div>
            <div className="hv-photo-offset" />
          </div>
        </div>
      </div>
    </section>
  );
}
