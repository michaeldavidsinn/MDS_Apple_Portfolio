
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./App.module.css";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Project,
  Certificates,
  Contact,
  BackToTop,
  CommandPalette,
} from "./components";

function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className={styles.App}>
      {/* Apple-Style Minimalist Top Scroll Progress Bar */}
      <motion.div className={styles.progressBar} style={{ scaleX }} />
      <Navbar onOpenCommandPalette={() => setIsCmdOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Certificates />
      <Contact />
      <BackToTop />
      <CommandPalette isOpen={isCmdOpen} setIsOpen={setIsCmdOpen} />
    </div>
  );
}

export default App;
