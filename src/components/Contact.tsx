"use client";
import { useState, useRef, useEffect, FormEvent } from "react";
import { Send, Mail } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".hv-contact-eyebrow", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          ".hv-contact-head",
          { opacity: 0, y: 30, duration: 0.7, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".hv-contact-body",
          { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          ".hv-contact-form > *",
          { opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: "power3.out" },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    gsap.to(form, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setSent(true);
        gsap.fromTo(
          ".hv-contact-sent",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.4)" }
        );
      },
    });
  };

  return (
    <section ref={sectionRef} id="contact" className="hv-section hv-contact" aria-label="Contact">
      <div ref={contentRef}>
        <p className="hv-contact-eyebrow">04. What&apos;s Next?</p>
        <h2 className="hv-contact-head">Get In Touch</h2>
        <p className="hv-contact-body">
          Whether you have a project in mind, a question, or just want to say hello — my inbox
          is always open. I&apos;ll do my best to get back to you promptly!
        </p>

        {!sent ? (
          <form className="hv-contact-form" onSubmit={handleSubmit} noValidate>
            <div className="hv-f-row">
              <label className="hv-f">
                <span className="hv-f-label">Name</span>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={values.name}
                  onChange={onChange("name")}
                  autoComplete="name"
                />
              </label>
              <label className="hv-f">
                <span className="hv-f-label">Email</span>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={values.email}
                  onChange={onChange("email")}
                  autoComplete="email"
                />
              </label>
            </div>
            <label className="hv-f">
              <span className="hv-f-label">Message</span>
              <textarea
                required
                rows={5}
                placeholder="What's on your mind?"
                value={values.message}
                onChange={onChange("message")}
              />
            </label>
            <div>
              <button type="submit" className="hv-btn hv-btn-primary">
                <span>Say Hello</span>
                <Send size={16} strokeWidth={2} style={{ position: "relative", zIndex: 1 }} />
              </button>
            </div>
          </form>
        ) : (
          <div className="hv-contact-sent">
            <div className="hv-contact-sent-icon">✓</div>
            <p style={{ color: "var(--fg)", fontWeight: 500, marginBottom: 6 }}>
              Thanks for reaching out!
            </p>
            <p style={{ fontSize: 14, color: "var(--fg-muted)" }}>
              I&apos;ll get back to you as soon as I can.
            </p>
          </div>
        )}

        <div style={{ marginTop: 32 }}>
          <a
            href="mailto:harshanineranjana@gmail.com"
            className="hv-btn hv-btn-secondary"
          >
            <span>harshanineranjana@gmail.com</span>
            <Mail size={15} strokeWidth={2} style={{ position: "relative", zIndex: 1 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
