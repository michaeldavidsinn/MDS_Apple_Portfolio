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
                <motion.div className={`${styles.card} ${styles.bioCard}`} variants={cardVariants}>
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>💻</span>
                        <h3>Who I Am</h3>
                    </div>
                    <p>
                        I'm a fullstack & AI developer specializing in building responsive, optimized sites and robust back-end APIs. My current focus bridges mobile application development and Artificial Intelligence, including crafting Convolutional Neural Networks for complex behavior detection.
                    </p>
                </motion.div>

                {/* Kartu 2: Personal Info (Kotak) */}
                <motion.div className={`${styles.card} ${styles.infoCard}`} variants={cardVariants}>
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>👤</span>
                        <h3>Profile</h3>
                    </div>
                    <ul className={styles.list}>
                        <li><strong>Name:</strong> Michael David Sin</li>
                        <li><strong>Born:</strong> 17 Nov 2004 (Balikpapan)</li>
                        <li><strong>Base:</strong> Surabaya, Indonesia</li>
                    </ul>
                </motion.div>

                {/* Kartu 3: Education & Roles (Lebar) */}
                <motion.div className={`${styles.card} ${styles.eduCard}`} variants={cardVariants}>
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>🎓</span>
                        <h3>Education & Roles</h3>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <h4>Informatics Student</h4>
                            <p>Universitas Ciputra Surabaya</p>
                        </div>
                        <div className={styles.timelineItem}>
                            <h4>Coder</h4>
                            <p>Apple Developer Academy</p>
                        </div>
                    </div>
                </motion.div>

                {/* Kartu 4: Organization & Certifications (Kotak) */}
                <motion.div className={`${styles.card} ${styles.orgCard}`} variants={cardVariants}>
                    <div className={styles.cardHeader}>
                        <span className={styles.icon}>🏆</span>
                        <h3>Experience</h3>
                    </div>
                    <ul className={styles.list}>
                        <li>
                            <strong>Mentoring Department</strong>
                            <span>2023 - 2024</span>
                        </li>
                        <li>
                            <strong>BNSP Certified Programmer</strong>
                            <span>Competency Certification</span>
                        </li>
                    </ul>
                </motion.div>
            </motion.div>
        </section>
    );
};