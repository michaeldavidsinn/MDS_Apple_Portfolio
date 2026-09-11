import React from "react";
import { motion } from "framer-motion";
import { getImageurl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  // Varian untuk membuat teks muncul satu per satu (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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
        <motion.div variants={itemVariants} className={styles.statusBadge}>
          <span className={styles.statusDotWrapper}>
            <span className={styles.statusDotPing} />
            <span className={styles.statusDot} />
          </span>
          <span>Available for Applied AI & Software Engineering Roles</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className={styles.title}>
          Hi, I'm <span className={styles.nameHighlight}>Michael</span>{" "}
          <span className={styles.wave}>👋</span>
        </motion.h1>

        <motion.p variants={itemVariants} className={styles.description}>
          Applied AI & Software Engineer (Coder at the Apple Developer Academy). I architect
          intelligent, production-grade digital products—bridging applied AI/computer vision
          pipelines with high-performance native Apple mobile and full-stack web platforms.
        </motion.p>

        <motion.div variants={itemVariants} className={styles.buttonContainer}>
          {/* Mengubah <a> dan <button> menjadi motion.a untuk efek klik */}
          <motion.a
            href="mailto:michaelsin04@gmail.com"
            className={styles.primaryBtn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0, 122, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.a>
          <motion.a
            href={getImageurl("cv/Michael DS_CV 2026.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Apple-Style Quick Metrics / Impact Highlights */}
        <motion.div variants={itemVariants} className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>Applied AI & Vision</span>
            <span className={styles.statLabel}>YOLO11 • PyTorch • Core ML</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>Apple Dev Academy</span>
            <span className={styles.statLabel}>Cohort 2026</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>200+ Industrial POs</span>
            <span className={styles.statLabel}>Production ERP</span>
          </div>
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
          dragConstraints={{
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }} /* Membuat gambar tidak bisa ditarik terlalu jauh dan akan kembali ke asal */
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
