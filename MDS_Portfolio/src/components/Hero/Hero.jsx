import React from "react";
import { motion } from "framer-motion"; 
import { getImageurl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {

    const handleDownloadCV = () => {
        // Path disesuaikan persis dengan nama file dan ekstensi .jpg di foldermu
        const cvUrl = "/MDS_Portfolio/assets/cv/Michael David Sin_CV.jpg"; 
        window.open(cvUrl, "_blank"); 
    };

    // Varian untuk membuat teks muncul satu per satu (Stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return ( 
        <section className={styles.container}>
            {/* Bagian Teks (Kiri) */}
            <motion.div 
                className={styles.content}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className={styles.badge}>
                    Software Engineer
                </motion.div>
                
                <motion.h1 variants={itemVariants} className={styles.title}>
                    Hi, I'm Michael <span className={styles.wave}>👋</span>
                </motion.h1>
                
                <motion.p variants={itemVariants} className={styles.description}>
                    I'm an Informatics student and Coder at the Apple Developer Academy based in Surabaya. I specialize in crafting exceptional digital experiences—bridging full-stack development, AI integrations, and sleek mobile applications using Swift, React, and Flutter.
                </motion.p>
                
                <motion.div variants={itemVariants} className={styles.buttonContainer}>
                    {/* Mengubah <a> dan <button> menjadi motion.a dan motion.button untuk efek klik */}
                    <motion.a 
                        href="mailto:michaelsin04@gmail.com" 
                        className={styles.primaryBtn}
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 122, 255, 0.4)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Let's Talk
                    </motion.a>
                    <motion.button 
                        onClick={handleDownloadCV} 
                        className={styles.secondaryBtn}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Resume
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Bagian Gambar (Kanan) dengan Efek Elastic Drag */}
            <motion.div
                className={styles.imageContainer}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                {/* Efek Tarik (Drag) */}
                <motion.div 
                    className={styles.imageWrapper}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} /* Membuat gambar tidak bisa ditarik terlalu jauh dan akan kembali ke asal */
                    dragElastic={0.15} /* Tingkat elastisitas pantulan */
                    whileHover={{ scale: 1.03, cursor: "grab" }}
                    whileTap={{ scale: 0.97, cursor: "grabbing" }}
                >
                    <img 
                        src={getImageurl("hero/heroImage.png")} 
                        alt="Michael David Sin" 
                        className={styles.heroImg}
                        draggable="false" /* Mencegah bug bawaan browser saat mendrag gambar */
                    />
                </motion.div>
                {/* Efek cahaya di belakang foto */}
                <div className={styles.glowEffect} />
            </motion.div>
        </section>
    );
};