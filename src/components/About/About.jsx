import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

export const About = () => {
    // Varian animasi untuk efek stagger pada grid
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.sectionTitle}>ABOUT</h2>
            
            <motion.div 
                className={styles.bentoGrid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Kartu 1: Bio & Core Focus (Lebar) */}
                <motion.div 
                    className={`${styles.card} ${styles.bioCard}`} 
                    variants={cardVariants}
                    onMouseMove={handleMouseMove}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>💻</span>
                        <h3>Who I Am</h3>
                    </div>
                    <p>
                        I am an Applied AI & Software Engineer specializing in computer vision pipelines, machine learning model optimization, and their production deployment across native Apple ecosystems (Swift/Core ML) and full-stack web architectures. With hands-on experience training YOLO11 architectures and delivering enterprise production software, I bridge applied AI with real-world engineering.
                    </p>
                </motion.div>

                {/* Kartu 2: Personal Info (Kotak) */}
                <motion.div 
                    className={`${styles.card} ${styles.infoCard}`} 
                    variants={cardVariants}
                    onMouseMove={handleMouseMove}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>👤</span>
                        <h3>Profile</h3>
                    </div>
                    <ul className={styles.list}>
                        <li><strong>Role:</strong> Applied AI & Software Engineer</li>
                        <li><strong>Focus:</strong> Computer Vision, Core ML, iOS & Full-Stack</li>
                        <li><strong>Base:</strong> Surabaya, Indonesia</li>
                        <li><strong>Status:</strong> Open to Roles & Freelance Web</li>
                    </ul>
                </motion.div>

                {/* Kartu 3: Education & Training (Lebar) */}
                <motion.div 
                    className={`${styles.card} ${styles.eduCard}`} 
                    variants={cardVariants}
                    onMouseMove={handleMouseMove}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>🎓</span>
                        <h3>Education & Academy</h3>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <h4>Apple Developer Academy</h4>
                            <p>Cohort 2026 • iOS Development & Design</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <h4>Universitas Ciputra Surabaya</h4>
                            <p>B.S. in Informatics (2022 - Present)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Kartu 4: Organization & Certifications (Kotak) */}
                <motion.div 
                    className={`${styles.card} ${styles.orgCard}`} 
                    variants={cardVariants}
                    onMouseMove={handleMouseMove}
                >
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>🏆</span>
                        <h3>Key Highlights</h3>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            <strong>BNSP Certified Programmer</strong>
                            <span>National Competency</span>
                        </li>
                        <li>
                            <strong>English Proficiency</strong>
                            <span>CEFR B2 Certified</span>
                        </li>
                        <li>
                            <strong>Student Mentor</strong>
                            <span>Informatics UC (2023 - Present)</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};