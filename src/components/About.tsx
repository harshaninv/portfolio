"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const skills = [
  "JavaScript (ES6+)",
  "PHP / Laravel / FastAPI",
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
            My journey into software development started after my Advanced Level studies,
            when I was selected to{" "}<a href="https://www.sab.ac.lk" target="_blank" rel="noopener noreferrer">
              Sabaragamuwa University of Sri Lanka
            </a>{" "}to pursue a BSc.
            (Hons) in Computing and Information Systems, a four-year degree program.
          </p>

          <p>
            During my university years, I built a strong foundation in software engineering
            through subjects such as Object-Oriented Programming, Algorithms, and programming
            languages including C, Java, and JavaScript. I also gained experience with databases
            like MySQL and MongoDB, while working on team-based projects using tools such as{" "}
            <a href="https://github.com/harshaninv" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            ,{" "}
            <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer">
              Jira,
            </a>{" "}
            and{" "}
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
              Figma
            </a>.
          </p>

          <p>
            In my third year, I completed a six-month internship at Coderay Technologies,
            where I worked on real-world applications using{" "}
            <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">
              Laravel
            </a>{" "}
            and{" "}
            <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer">
              Flutter
            </a>{" "}. From designing Figma wireframes and implementing pixel-perfect UIs
            to architecting Laravel backends with RESTful APIs and third-party integrations,
            I gained practical experience working in Agile teams and delivering features from
            concept to deployment.
          </p>

          <p>
            After graduating with a GPA of 3.08 (Second Class Lower Division) in October 2025,
            I joined Avya Technologies as an Associate Software Engineer. Currently, I work on
            full-stack development using technologies such as Next.js, Nuxt.js, FastAPI, and AWS,
            where I continue to improve my skills by building scalable and user-friendly applications.
          </p>

          <p>
            I also enjoy writing about what I learn in software development and sharing my experiences
            through technical articles. You can read my blog posts on{" "}
            <a
              href="https://medium.com/@harshanineranjana"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>.
          </p>
          
          <p>
            I’m passionate about continuous learning and always open to new opportunities where
            I can grow, contribute, and take on new challenges as a Software Engineer.
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
