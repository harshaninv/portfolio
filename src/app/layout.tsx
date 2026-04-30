import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harshani Vitharana — Full Stack Developer",
  description:
    "Motivated Full Stack Developer based in Colombo, Sri Lanka. Building scalable web applications with Laravel, React.js, Flutter, and more.",
  keywords: ["Full Stack Developer", "Harshani Vitharana", "Laravel", "React", "Flutter", "Sri Lanka"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
