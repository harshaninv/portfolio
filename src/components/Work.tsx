"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 6.77 5.07 5.07 0 0 0 19.91 3S18.73 2.65 16 4.55a13.38 13.38 0 0 0-7 0C6.27 2.65 5.09 3 5.09 3A5.07 5.07 0 0 0 5 6.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 20.13V24" />
  </svg>
);
const ExternalIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
  </svg>
);
const FolderIcon = ({ size = 36 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
);

const featuredProjects = [
  {
    title: "DIRAS Election Monitoring System",
    description:
      "A civic-technology platform for monitoring and reporting on election data in real time. Built with Laravel for the backend and React for the frontend, featuring secure RESTful APIs, user role management, and a comprehensive data dashboard.",
    stack: ["Laravel", "React.js", "MySQL", "RESTful API", "Postman"],
    imageLabel: "Election monitoring dashboard",
  },
  {
    title: "List-Me — Smart Grocery App",
    description:
      "A mobile-first grocery shopping application built with Flutter and a Node.js/MongoDB backend. Features smart list management, barcode scanning concept, and a clean, intuitive interface for everyday grocery planning.",
    stack: ["Flutter", "Node.js", "MongoDB", "Dart"],
    imageLabel: "List-Me mobile UI",
    reversed: true,
  },
];

const otherProjects = [
  {
    title: "Automated Vehicle Monitoring System",
    description: "Campus security system built with Laravel and Filament to monitor vehicles, automate tracking and enhance campus security management.",
    stack: ["Laravel", "Filament", "MySQL"],
  },
  {
    title: "Health Direct",
    description: "Healthcare mobile app concept designed for Hackholics competition. Started with Figma wireframes, progressed to a React mobile application for healthcare management.",
    stack: ["React.js", "Figma", "Healthcare"],
  },
  {
    title: "Bookstore",
    description: "Personal library management system designed to track a growing book collection and manage borrowings with a clean UI.",
    stack: ["React", "Laravel", "MySQL"],
  },
  {
    title: "TISL Web Application",
    description: "Enterprise web application developed at Avya Technologies with full-stack implementation including backend APIs and responsive frontend.",
    stack: ["Laravel", "Vue.js", "PostgreSQL"],
  },
  {
    title: "Note-App",
    description: "Efficient note-taking web application utilizing vanilla JavaScript, HTML, and CSS for a fast, lightweight note management experience.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Daily Task Manager",
    description: "Task management system built with Laravel and MySQL. Implements CRUD operations and user-friendly UI for efficient daily activity tracking.",
    stack: ["Laravel", "MySQL", "Bootstrap"],
  },
];

function FeaturedProject({
  title,
  description,
  stack,
  imageLabel,
  reversed,
  index,
}: {
  title: string;
  description: string;
  stack: string[];
  imageLabel: string;
  reversed?: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const content = ref.current!.querySelector(".hv-feat-content");
      const image = ref.current!.querySelector(".hv-feat-image");

      gsap.from(content, {
        opacity: 0,
        x: reversed ? 50 : -50,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(image, {
        opacity: 0,
        x: reversed ? -50 : 50,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reversed]);

  return (
    <div ref={ref} className={`hv-feat${reversed ? " reversed" : ""}`}>
      <div className="hv-feat-content">
        <div className="hv-feat-eyebrow">Featured Project</div>
        <h3 className="hv-feat-title">
          <a href="#" onClick={(e) => e.preventDefault()}>{title}</a>
        </h3>
        <div className="hv-feat-card">{description}</div>
        <ul className="hv-feat-stack">
          {stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="hv-feat-links">
          <a href="#" onClick={(e) => e.preventDefault()} aria-label="GitHub">
            <GithubIcon size={20} />
          </a>
          <a href="#" onClick={(e) => e.preventDefault()} aria-label="Live site">
            <ExternalIcon size={20} />
          </a>
        </div>
      </div>
      <div className="hv-feat-image">
        <div className="hv-feat-imgframe">
          <div className="hv-feat-grid-lines" />
          <div className="hv-feat-imglabel">{imageLabel}</div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(headRef.current, { opacity: 0, x: -30, duration: 0.7, ease: "power3.out" })
        .from(
          ruleRef.current,
          { scaleX: 0, transformOrigin: "left", duration: 0.9, ease: "power3.out" },
          "-=0.4"
        );

      gsap.to(".hv-proj", {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hv-proj-grid",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".hv-other-head", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hv-other-head",
          start: "top 80%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="hv-section" aria-label="Work">
      <h2 ref={headRef} className="hv-section-head">
        <span className="hv-section-num">03.</span>
        <span className="hv-section-title">Some Things I&apos;ve Built</span>
        <span ref={ruleRef} className="hv-section-rule" />
      </h2>

      <div className="hv-feat-list">
        {featuredProjects.map((p, i) => (
          <FeaturedProject key={p.title} index={i} {...p} />
        ))}
      </div>

      <div className="hv-other-head">
        <h3 className="hv-other-title">Other Noteworthy Projects</h3>
        <a href="https://github.com/harshani" target="_blank" rel="noopener noreferrer" className="hv-other-link">
          view on GitHub
        </a>
      </div>

      <div className="hv-proj-grid">
        {otherProjects.map((p) => (
          <article key={p.title} className="hv-proj">
            <div className="hv-proj-top">
              <span className="hv-proj-folder">
                <FolderIcon size={34} />
              </span>
              <div className="hv-proj-links">
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="GitHub">
                  <GithubIcon size={18} />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Live site">
                  <ExternalIcon size={18} />
                </a>
              </div>
            </div>
            <h3 className="hv-proj-title">{p.title}</h3>
            <p className="hv-proj-desc">{p.description}</p>
            <ul className="hv-proj-stack">
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
