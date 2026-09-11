import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Project.module.css";
import project from "../../data/project.json";
import { ProjectCard } from "./ProjectCard";

const CATEGORIES = [
  "All",
  "AI & Machine Learning",
  "iOS & Mobile",
  "Full-Stack Web"
];

export const Project = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? project
    : project.filter(p => p.categories && p.categories.includes(activeCategory));

  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Projects</h2>
        <p className={styles.subtitle}>
          Curated engineering solutions across enterprise production systems, applied machine learning, native Apple platforms, and scalable web platforms.
        </p>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`${styles.tabBtn} ${activeCategory === cat ? styles.tabActive : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilterTab"
                  className={styles.activeTabBg}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
      
      <motion.div 
        layout
        className={styles.projectsGrid}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={proj} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};