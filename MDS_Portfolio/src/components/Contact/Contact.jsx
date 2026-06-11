import React from 'react';
import { motion } from 'framer-motion';
import { getImageurl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <motion.div 
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Bagian Kiri: Pesan Ajakan */}
                <div className={styles.text}>
                    <h2>Let's Connect</h2>
                    <p>
                        Whether you have a project in mind, a question about my work, 
                        or just want to say hi, my inbox is always open!
                    </p>
                </div>
                
                {/* Bagian Kanan: Tautan Kontak */}
                <ul className={styles.links}>
                    {/* Bug Fixed: <liv> diubah menjadi <li> */}
                    <li className={styles.link}>
                        <div className={styles.iconWrapper}>
                            <img src={getImageurl("contact/emailIcon.png")} alt="Email icon" />
                        </div>
                        <a href="mailto:michaelsin04@gmail.com">michaelsin04@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <div className={styles.iconWrapper}>
                            <img src={getImageurl("contact/githubIcon.png")} alt="Github icon" />
                        </div>
                        {/* Menambahkan target="_blank" agar tab portofoliomu tidak tertutup saat link diklik */}
                        <a href="https://www.github.com/michaeldavidsinn" target="_blank" rel="noopener noreferrer">
                            github.com/michaeldavidsinn
                        </a>
                    </li>
                </ul>
            </motion.div>

            {/* Tambahan Baris Copyright untuk kesan Profesional */}
            <div className={styles.bottomBar}>
                <p>&copy; {new Date().getFullYear()} Michael David Sin. All rights reserved.</p>
            </div>
        </footer>
    );
};