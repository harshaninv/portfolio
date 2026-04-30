import Nav from "@/components/Nav";
import SocialRail from "@/components/SocialRail";
import EmailRail from "@/components/EmailRail";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function HomePage() {
  return (
    <>
      <Cursor />
      <div className="hv-page">
        <Nav />
        <SocialRail />
        <EmailRail />
        <main>
          <Hero />
          <About />
          <Experience />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
