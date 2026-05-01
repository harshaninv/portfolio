"use client";
import { useState, useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const jobs = [
  {
    company: "Avya Technologies",
    fullName: "Avya Technologies Pvt Ltd",
    note: "formerly Turbogen Technologies",
    role: "Associate Software Engineer",
    range: "Sept 2025 — Present",
    stack: "Laravel · React.js · Vue.js · Next.js · Nuxt.js · Flutter · Firebase · FastAPI · MySQL · PostgreSQL",
    bullets: [
      "Developed and maintained backend systems using Laravel, including RESTful APIs, database design (ER diagrams), and CRUD functionalities.",
      "Integrated frontend applications with backend services and implemented UI based on Figma designs.",
      "Designed and implemented RESTful APIs and integrated third-party systems for secure, efficient data flow.",
      "Managed end-to-end UI/UX workflow — from Figma wireframes through automated and manual testing (Postman, Unit tests) within an Agile/Scrum environment.",
      "Collaborated with team members using Git and Jira for efficient workflow management.",
    ],
  },
  {
    company: "CodeRay Technologies",
    fullName: "CodeRay Technologies Pvt Ltd",
    role: "Intern Software Engineer",
    range: "Feb 2024 — Aug 2024",
    stack: "Laravel · React.js · Flutter · MySQL · Postman",
    bullets: [
      "Assisted in developing web application features using Laravel and Flutter during the internship period.",
      "Contributed to major projects like the DIRAS Election Monitoring System and TISL Web Application.",
      "Gained hands-on experience with API testing using Postman and database management with MySQL.",
      "Collaborated with senior engineers on code reviews and learning best practices in software development.",
      "Participated in Agile ceremonies and contributed to sprint planning and retrospectives.",
    ],
  },
  {
    company: "Academy Projects",
    fullName: "Independent and Team Projects",
    role: "Full Stack Developer",
    range: "2022 — 2024",
    stack: "Flutter · Node.js · MongoDB · React.js · Laravel",
    bullets: [
      "Built the List-Me smart grocery shopping app using Flutter, Node.js, and MongoDB (Team project).",
      "Developed a personal library management system (Bookstore) with React and Laravel.",
      "Created Health Direct — a healthcare mobile app concept from Figma wireframes through to a React implementation, designed for the Hackholics Hackathon (Team project).",
      "Built various utility apps including a Note-App (JavaScript) and Daily Task Manager (Laravel/MySQL).",
      "Automated Vehicle Monitoring System — a campus security system built with Laravel and Filament (Team project).",
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLHeadingElement>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);

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
          ".hv-exp-tabs",
          { opacity: 0, x: -20, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".hv-exp-panel",
          { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const switchTab = (index: number) => {
    if (index === activeTab) return;
    gsap.to(panelRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.18,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(index);
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
        );
      },
    });
  };

  const job = jobs[activeTab];

  return (
    <section ref={sectionRef} id="experience" className="hv-section" aria-label="Experience">
      <h2 ref={headRef} className="hv-section-head">
        <span className="hv-section-num">02.</span>
        <span className="hv-section-title">Where I&apos;ve Worked</span>
        <span ref={ruleRef} className="hv-section-rule" />
      </h2>

      <div className="hv-exp-body">
        <div className="hv-exp-tabs" role="tablist" aria-label="Jobs">
          {jobs.map((j, i) => (
            <button
              key={j.company}
              role="tab"
              aria-selected={activeTab === i}
              className={`hv-exp-tab${activeTab === i ? " active" : ""}`}
              onClick={() => switchTab(i)}
            >
              {j.company}
            </button>
          ))}
        </div>

        <div ref={panelRef} className="hv-exp-panel" role="tabpanel">
          <div className="hv-exp-role-title">
            {job.role}{" "}
            <a className="hv-exp-company" href="#" onClick={(e) => e.preventDefault()}>
              @ {job.fullName}
            </a>
          </div>
          {job.note && (
            <div className="hv-exp-range" style={{ marginBottom: 4, fontStyle: "italic", opacity: 0.7 }}>
              {job.note}
            </div>
          )}
          <div className="hv-exp-range">{job.range}</div>
          <div className="hv-exp-stack">{job.stack}</div>
          <ul className="hv-exp-list">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
