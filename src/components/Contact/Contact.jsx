import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getImageurl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("michaelsin04@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
    };

    return (
        <footer id="contact" className={styles.container}>
            <motion.div 
                className={styles.content}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Bagian Kiri: Pesan Ajakan */}
                <div className={styles.text}>
                    <h2>Let's Connect</h2>
                    <p>
                        Whether you have a project in mind, a potential opportunity, 
                        or just want to discuss technology, my inbox is always open.
                    </p>
                </div>
                
                {/* Bagian Kanan: Tautan Kontak */}
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <div className={styles.iconWrapper}>
                            <img src={getImageurl("contact/emailIcon.png")} alt="Email icon" />
                        </div>
                        <div className={styles.emailWrapper}>
                            <a href="mailto:michaelsin04@gmail.com">michaelsin04@gmail.com</a>
                            <button 
                                onClick={handleCopyEmail} 
                                className={styles.copyBtn}
                                aria-label="Copy email to clipboard"
                            >
                                {copied ? "Copied! ✓" : "Copy"}
                            </button>
                        </div>
                    </li>
                    <li className={styles.link}>
                        <div className={styles.iconWrapper}>
                            <img src={getImageurl("contact/githubIcon.png")} alt="Github icon" />
                        </div>
                        <a href="https://www.github.com/michaeldavidsinn" target="_blank" rel="noopener noreferrer">
                            github.com/michaeldavidsinn
                        </a>
                    </li>
                    {/* Tambahan Link LinkedIn */}
                    <li className={styles.link}>
                        <div className={styles.iconWrapper}>
                            <img src={getImageurl("contact/linkedinIcon.svg.png")} alt="LinkedIn icon" />
                        </div>
                        <a href="https://www.linkedin.com/in/michael-david-sin-3b3aab256/" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/michael-david-sin
                        </a>
                    </li>
                </ul>
            </motion.div>

            {/* Tambahan Baris Copyright & Colophon untuk kesan Profesional */}
            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} Michael David Sin. All rights reserved.</p>
                <p className={styles.techCredit}>
                    Crafted with React, Vite & Framer Motion &bull;{" "}
                    <a 
                        href="https://github.com/michaeldavidsinn/MDS_Apple_Portfolio" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.sourceLink}
                    >
                        View Source Code ↗
                    </a>
                </p>
            </div>
        </footer>
    );
};