import React, { useEffect, useRef, useState } from "react";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useCustomCursor } from "../hooks/useCustomCursor";
import { useStatsCounter } from "../hooks/useStatsCounter";

import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Why from "./Why";
import Manifesto from "./Manifesto";
import FAQ from "./FAQ";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [backTopVisible, setBackTopVisible] = useState(false);

  const heroStatsRef = useRef(null);

  useRevealOnScroll();
  useCustomCursor();
  useStatsCounter(heroStatsRef);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setBackTopVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <Cursor />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Navbar scrolled={scrolled} onOpenMobile={() => setMobileOpen(true)} />

      <Hero heroStatsRef={heroStatsRef} />
      <About />
      <Services />
      <Projects />
      <Why />
      <Manifesto />
      <FAQ />

      <Footer />

      <BackToTop visible={backTopVisible} />
    </div>
  );
}