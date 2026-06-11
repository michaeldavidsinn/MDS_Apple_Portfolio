import React from "react";
import { motion } from "framer-motion";
import styles from "./Project.module.css";
import project from "../../data/project.json";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
    // Varian animasi untuk grid pembungkus
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section className={styles.container} id="projects">
            <div className={styles.header}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.subtitle}>
                    A showcase of my recent work, ranging from full-stack web applications and complex AI behavior detection models to sleek mobile experiences.
                </p>
            </div>
            
            <motion.div 
                className={styles.projectsGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {project.map((proj, id) => {
                    return <ProjectCard key={id} project={proj} />;
                })}
            </motion.div>
        </section>
    );
};