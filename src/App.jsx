
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Project } from "./components/Project/Project";
import { Certificates } from "./components/Certificates/Certificates";
import { BackToTop } from "./components/BackToTop/BackToTop";

function App() {
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
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Certificates />
      <Contact />
      <BackToTop />
    </div>
  );
}

export default App;
